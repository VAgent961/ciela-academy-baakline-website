# Ciela Academy Baakline - Backend Documentation

## Database Schema
The project uses Neon Postgres. The schema is defined in `db/schema.sql`.

### Table: `contact_messages`
Stores all inquiries from the contact and program inquiry forms.
- `id`: Primary Key (bigserial)
- `created_at`: Timestamp of submission
- `name`: Full name of the inquirer
- `phone`: Contact phone number
- `email`: Contact email (optional)
- `program`: Selected program of interest
- `message`: Detailed message
- `status`: 'new' (default) or 'done'

## API Routes

### `POST /api/contact`
Handles form submissions from the website.
- **Validation**: Requires `name` and `phone`. Validates `email` format if provided.
- **Notifications**: Sends a Telegram message and Email to the owner if configured.
- **Response**: Returns `{ ok: true, whatsapp: string }` where `whatsapp` is a pre-filled link for the user to follow up.

## Admin Panel
Accessible at `/admin`.
- **Authentication**: Protected by `ADMIN_PASSWORD`.
- **Features**: View the latest 100 inquiries with contact details and messages.

## Environment Variables
Required for full functionality:
- `DATABASE_URL`: Neon Postgres connection string (set automatically).
- `ADMIN_PASSWORD`: Password for the `/admin` area.
- `ADMIN_SECRET`: Used for session signing (set automatically).
- `WHATSAPP_NUMBER`: `96171070823` (for wa.me links).
- `TELEGRAM_BOT_TOKEN`: (Optional) For owner notifications.
- `TELEGRAM_CHAT_ID`: (Optional) For owner notifications.
- `RESEND_API_KEY`: (Optional) For email notifications.
- `NOTIFY_EMAIL`: (Optional) Destination for email notifications.

## Later Features
- Student/Parent accounts for progress tracking.
- Online payment for term fees.
- Detailed class attendance management.
