/**
 * INFAMOUS PROJECT — Subscribers CRM (Google Apps Script Web App)
 *
 * Recibe llamadas desde src/app/api/subscribe y src/app/api/webhooks/brevo
 * (Next.js, servidor) y mantiene la hoja "INFAMOUS PROJECT — Subscribers CRM"
 * como respaldo operativo. Brevo sigue siendo la fuente principal del estado
 * de suscripción; esta hoja es una copia consultable/exportable.
 *
 * INSTALACIÓN (Fase 5, manual):
 * 1. Crea la hoja de cálculo "INFAMOUS PROJECT — Subscribers CRM" con esta
 *    fila de encabezados exacta en la fila 1:
 *    ID | Email | Fecha de solicitud | Fecha de confirmación | Fecha de baja |
 *    Estado | Fuente | Página | Idioma | Consentimiento | Versión del consentimiento |
 *    Versión de la política | Brevo Contact ID | Última actualización | Notas
 * 2. Extensiones → Apps Script, pega este archivo completo.
 * 3. Ejecuta una vez la función `setup` desde el editor para guardar el secreto
 *    compartido en las Propiedades del script (no lo escribas aquí en el código).
 * 4. Implementar → Nueva implementación → Aplicación web.
 *    - Ejecutar como: Yo (tu cuenta)
 *    - Quién tiene acceso: Cualquier usuario
 * 5. Copia la URL de la Web App en GOOGLE_APPS_SCRIPT_URL (Vercel + .env.local),
 *    y el mismo secreto que configuraste en `setup` en GOOGLE_APPS_SCRIPT_SECRET.
 *
 * Estados usados en la columna "Estado":
 * pending_confirmation | subscribed | already_subscribed | unsubscribed | blocked | error
 */

const SHEET_NAME = 'INFAMOUS PROJECT — Subscribers CRM'
const HEADERS = [
  'ID', 'Email', 'Fecha de solicitud', 'Fecha de confirmación', 'Fecha de baja',
  'Estado', 'Fuente', 'Página', 'Idioma', 'Consentimiento',
  'Versión del consentimiento', 'Versión de la política', 'Brevo Contact ID',
  'Última actualización', 'Notas',
]

const COL = {
  ID: 1, EMAIL: 2, REQUESTED_AT: 3, CONFIRMED_AT: 4, UNSUBSCRIBED_AT: 5,
  STATUS: 6, SOURCE: 7, PAGE: 8, LANGUAGE: 9, CONSENT: 10,
  CONSENT_VERSION: 11, POLICY_VERSION: 12, BREVO_CONTACT_ID: 13,
  UPDATED_AT: 14, NOTES: 15,
}

// Ejecutar UNA VEZ manualmente desde el editor de Apps Script para guardar el
// secreto compartido. No dejes el valor real escrito en este archivo.
function setup() {
  const secret = Browser.msgBox('Pega aquí el mismo valor que usarás en GOOGLE_APPS_SCRIPT_SECRET (Vercel).')
  // Nota: Browser.msgBox solo funciona en contexto de hoja de cálculo vinculada
  // (no en el editor standalone). Alternativa: usa
  // PropertiesService.getScriptProperties().setProperty('SHARED_SECRET', 'tu-secreto')
  // directamente desde una función temporal si Browser.msgBox no está disponible.
}

function getSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)
  if (!sheet) throw new Error('Sheet not found: ' + SHEET_NAME)
  return sheet
}

function isAuthorized(payload) {
  const expected = PropertiesService.getScriptProperties().getProperty('SHARED_SECRET')
  return Boolean(expected) && payload.secret === expected
}

function normalizeEmail(email) {
  return String(email || '').trim().toLowerCase()
}

// Evita duplicados: busca la fila existente por email normalizado antes de crear una nueva.
function findRowByEmail(sheet, email) {
  const values = sheet.getDataRange().getValues()
  for (let row = 1; row < values.length; row++) {
    if (normalizeEmail(values[row][COL.EMAIL - 1]) === email) return row + 1 // 1-indexed sheet row
  }
  return null
}

function nextId(sheet) {
  const lastRow = sheet.getLastRow()
  if (lastRow < 2) return 1
  const lastId = Number(sheet.getRange(lastRow, COL.ID).getValue()) || 0
  return lastId + 1
}

function handleRequest(sheet, payload) {
  const email = normalizeEmail(payload.email)
  if (!email) throw new Error('Missing email')

  const now = new Date()
  const existingRow = findRowByEmail(sheet, email)

  if (existingRow) {
    const currentStatus = sheet.getRange(existingRow, COL.STATUS).getValue()
    // No reactivar accidentalmente a alguien ya confirmado, bloqueado o dado de baja.
    if (currentStatus === 'pending_confirmation' || !currentStatus) {
      sheet.getRange(existingRow, COL.REQUESTED_AT).setValue(now)
      sheet.getRange(existingRow, COL.STATUS).setValue('pending_confirmation')
    }
    sheet.getRange(existingRow, COL.UPDATED_AT).setValue(now)
    return { id: sheet.getRange(existingRow, COL.ID).getValue(), row: existingRow }
  }

  const id = nextId(sheet)
  sheet.appendRow([
    id, email, now, '', '',
    'pending_confirmation', payload.source || '', payload.pageUrl || '', payload.language || '',
    payload.consent === false ? false : true,
    payload.consentVersion || '', payload.policyVersion || '', payload.brevoContactId || '',
    now, '',
  ])
  return { id, row: sheet.getLastRow() }
}

function handleConfirm(sheet, payload) {
  const email = normalizeEmail(payload.email)
  if (!email) throw new Error('Missing email')

  const now = new Date()
  let row = findRowByEmail(sheet, email)

  if (!row) {
    // Caso borde: confirmación sin solicitud previa registrada (no debería ocurrir en flujo normal).
    const id = nextId(sheet)
    sheet.appendRow([id, email, '', now, '', 'subscribed', '', '', '', true, '', '', payload.brevoContactId || '', now, 'Fila creada desde webhook de confirmación sin solicitud previa'])
    return { id, row: sheet.getLastRow() }
  }

  sheet.getRange(row, COL.CONFIRMED_AT).setValue(now)
  sheet.getRange(row, COL.STATUS).setValue('subscribed')
  if (payload.brevoContactId) sheet.getRange(row, COL.BREVO_CONTACT_ID).setValue(payload.brevoContactId)
  sheet.getRange(row, COL.UPDATED_AT).setValue(now)
  return { id: sheet.getRange(row, COL.ID).getValue(), row }
}

function handleUnsubscribe(sheet, payload) {
  const email = normalizeEmail(payload.email)
  if (!email) throw new Error('Missing email')

  const now = new Date()
  const row = findRowByEmail(sheet, email)
  if (!row) return { id: null, row: null }

  sheet.getRange(row, COL.UNSUBSCRIBED_AT).setValue(now)
  sheet.getRange(row, COL.STATUS).setValue('unsubscribed')
  sheet.getRange(row, COL.UPDATED_AT).setValue(now)
  return { id: sheet.getRange(row, COL.ID).getValue(), row }
}

function handleBlocked(sheet, payload) {
  const email = normalizeEmail(payload.email)
  if (!email) throw new Error('Missing email')

  const now = new Date()
  const row = findRowByEmail(sheet, email)
  if (!row) return { id: null, row: null }

  sheet.getRange(row, COL.STATUS).setValue('blocked')
  sheet.getRange(row, COL.UPDATED_AT).setValue(now)
  return { id: sheet.getRange(row, COL.ID).getValue(), row }
}

function notifyAdminIfConfigured(action, email) {
  try {
    const adminEmail = PropertiesService.getScriptProperties().getProperty('ADMIN_NOTIFICATION_EMAIL')
    if (!adminEmail) return
    GmailApp.sendEmail(adminEmail, 'INFAMOUS PROJECT — ' + action, 'Evento: ' + action + '\nEmail: ' + email)
  } catch (err) {
    // Una falla del aviso administrativo nunca debe interrumpir el flujo principal.
  }
}

function doPost(e) {
  let payload
  try {
    payload = JSON.parse(e.postData.contents)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'invalid_json' })).setMimeType(ContentService.MimeType.JSON)
  }

  if (!isAuthorized(payload)) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'unauthorized' })).setMimeType(ContentService.MimeType.JSON)
  }

  try {
    const sheet = getSheet()
    let result

    switch (payload.action) {
      case 'request':
        result = handleRequest(sheet, payload)
        break
      case 'confirm':
        result = handleConfirm(sheet, payload)
        break
      case 'unsubscribe':
        result = handleUnsubscribe(sheet, payload)
        break
      case 'blocked':
        result = handleBlocked(sheet, payload)
        break
      default:
        return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'unknown_action' })).setMimeType(ContentService.MimeType.JSON)
    }

    notifyAdminIfConfigured(payload.action, normalizeEmail(payload.email))

    return ContentService.createTextOutput(JSON.stringify({ success: true, action: payload.action, id: result.id })).setMimeType(ContentService.MimeType.JSON)
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: 'server_error' })).setMimeType(ContentService.MimeType.JSON)
  }
}
