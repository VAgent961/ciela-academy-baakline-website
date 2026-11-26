import { NextResponse } from 'next/server';
import { sql, hasDb } from '@/lib/db';
import { clean, isEmail, asText, whatsappLink, notifyOwner } from '@/lib/notify';

export async function POST(req: Request) {
  let wa = '';
  try {
    const body = await req.json();
    const name = clean(body.name, 100);
    const phone = clean(body.phone, 50);
    const email = clean(body.email, 100);
    const program = clean(body.program, 100);
    const message = clean(body.message, 1000);

    if (!name || !phone) {
      return NextResponse.json({ ok: false, error: 'Name and phone are required.' }, { status: 400 });
    }

    if (email && !isEmail(email)) {
      return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
    }

    const fields = [
      { label: 'Name', value: name },
      { label: 'Phone', value: phone },
      { label: 'Email', value: email || 'Not provided' },
      { label: 'Program', value: program || 'General Inquiry' },
      { label: 'Message', value: message || 'No message' },
    ];

    const subject = `New Inquiry: ${program || 'General'}`;
    wa = whatsappLink(asText(subject, fields));

    if (!hasDb) {
      return NextResponse.json({ 
        ok: false, 
        error: 'Online inquiry is not connected yet. Please contact us on WhatsApp.', 
        whatsapp: wa 
      }, { status: 503 });
    }

    await sql`
      insert into contact_messages (name, phone, email, program, message)
      values (${name}, ${phone}, ${email}, ${program}, ${message})
    `;

    await notifyOwner(subject, fields);

    return NextResponse.json({ ok: true, whatsapp: wa });
  } catch (err) {
    console.error('Contact API Error:', err);
    return NextResponse.json({ 
      ok: false, 
      error: 'Something went wrong. Please try again or contact us on WhatsApp.', 
      whatsapp: wa 
    }, { status: 500 });
  }
}
