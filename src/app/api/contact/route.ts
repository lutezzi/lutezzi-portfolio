import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  botcheck?: string;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    console.error("WEB3FORMS_ACCESS_KEY is not configured");
    return NextResponse.json(
      { success: false, message: "Contact form is not configured." },
      { status: 503 }
    );
  }

  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const subject = body.subject?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (body.botcheck) {
    return NextResponse.json({ success: true });
  }

  if (name.length < 2) {
    return NextResponse.json(
      { success: false, message: "Name is too short." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { success: false, message: "Invalid email address." },
      { status: 400 }
    );
  }

  if (subject.length < 2) {
    return NextResponse.json(
      { success: false, message: "Subject is too short." },
      { status: 400 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      { success: false, message: "Message is too short." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        subject,
        message,
        from_name: "Lutezzi Portfolio",
        replyto: email,
      }),
    });

    const result = (await response.json()) as { success?: boolean; message?: string };

    if (!response.ok || !result.success) {
      return NextResponse.json(
        { success: false, message: result.message ?? "Failed to send message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message." },
      { status: 502 }
    );
  }
}
