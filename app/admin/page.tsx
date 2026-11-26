import { sql, hasDb } from '@/lib/db';
import { LogoutButton } from '@/lib/admin-ui';

export const dynamic = 'force-dynamic';
export const metadata = { title: 'Admin | Ciela Academy', robots: { index: false, follow: false } };

export default async function AdminPage() {
  if (!hasDb) {
    return (
      <div className="min-h-[100dvh] bg-background p-8">
        <div className="max-w-4xl mx-auto bg-surface p-12 rounded-2xl border border-secondary/20 text-center">
          <h2 className="font-heading text-3xl font-bold text-ink mb-4">Database Not Connected</h2>
          <p className="text-muted">Please connect your Neon Postgres database to view inquiries.</p>
        </div>
      </div>
    );
  }

  let inquiries = [];
  let error = '';

  try {
    inquiries = await sql`
      select * from contact_messages 
      order by created_at desc 
      limit 100
    `;
  } catch (err) {
    console.error('Admin Query Error:', err);
    error = 'Failed to load inquiries from the database.';
  }

  return (
    <div className="min-h-[100dvh] bg-background">
      <header className="bg-surface border-b border-secondary/20 px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="font-heading font-bold text-xl text-ink">Ciela Academy</h1>
            <p className="text-[12px] text-muted uppercase tracking-widest">Admin Dashboard</p>
          </div>
          <LogoutButton />
        </div>
      </header>

      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h2 className="font-heading text-2xl font-bold text-ink">Recent Inquiries</h2>
          <p className="text-muted">Latest 100 messages from the contact form.</p>
        </div>

        {error ? (
          <div className="bg-red-50 border border-red-100 text-red-600 p-6 rounded-xl">
            {error}
          </div>
        ) : inquiries.length === 0 ? (
          <div className="bg-surface p-12 rounded-xl border border-secondary/20 text-center">
            <p className="text-muted">No inquiries found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {inquiries.map((row: any) => (
              <div key={row.id} className="bg-surface p-6 rounded-xl border border-secondary/20 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-ink text-lg">{row.name}</h3>
                      <span className={`text-[12px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                        row.status === 'new' ? 'bg-primary/10 text-primary' : 'bg-secondary/20 text-muted'
                      }`}>
                        {row.status}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <strong>Phone:</strong> {row.phone}
                      </span>
                      {row.email && (
                        <span className="flex items-center gap-1">
                          <strong>Email:</strong> {row.email}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[12px] font-bold text-muted uppercase tracking-widest">
                      {new Date(row.created_at).toLocaleString('en-US', { 
                        month: 'short', 
                        day: '2-digit', 
                        year: 'numeric', 
                        hour: '2-digit', 
                        minute: '2-digit', 
                        hour12: false 
                      })}
                    </div>
                    <div className="text-sm font-bold text-primary mt-1">
                      {row.program || 'General Inquiry'}
                    </div>
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-secondary/10">
                  <p className="text-ink text-sm leading-relaxed whitespace-pre-wrap">
                    {row.message || <span className="italic text-muted">No message provided.</span>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
