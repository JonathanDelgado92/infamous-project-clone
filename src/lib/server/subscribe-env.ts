// Lectura centralizada de las variables de entorno del flujo de newsletter.
// Ningún valor real vive aquí — solo se leen desde process.env en tiempo de ejecución (servidor).

export const subscribeEnv = {
  brevoApiKey: process.env.BREVO_API_KEY || '',
  brevoPendingListId: process.env.BREVO_PENDING_LIST_ID || '',
  brevoConfirmedListId: process.env.BREVO_CONFIRMED_LIST_ID || '',
  brevoDoiTemplateId: process.env.BREVO_DOI_TEMPLATE_ID || '',
  brevoConfirmationRedirectUrl: process.env.BREVO_CONFIRMATION_REDIRECT_URL || '',
  brevoWebhookSecret: process.env.BREVO_WEBHOOK_SECRET || '',
  googleAppsScriptUrl: process.env.GOOGLE_APPS_SCRIPT_URL || '',
  googleAppsScriptSecret: process.env.GOOGLE_APPS_SCRIPT_SECRET || '',
  adminNotificationEmail: process.env.ADMIN_NOTIFICATION_EMAIL || '',
  turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || '',
  privacyPolicyVersion: process.env.PRIVACY_POLICY_VERSION || '1.0',
}

export const isBrevoConfigured = () =>
  Boolean(subscribeEnv.brevoApiKey && subscribeEnv.brevoPendingListId && subscribeEnv.brevoDoiTemplateId && subscribeEnv.brevoConfirmationRedirectUrl)

export const isGoogleSheetsConfigured = () => Boolean(subscribeEnv.googleAppsScriptUrl && subscribeEnv.googleAppsScriptSecret)

export const isTurnstileConfigured = () => Boolean(subscribeEnv.turnstileSecretKey)

export const isAdminNotificationConfigured = () => Boolean(subscribeEnv.adminNotificationEmail && subscribeEnv.brevoApiKey)
