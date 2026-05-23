import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY
);

interface SendVerificationEmailProps {
  email: string;
  name: string;
  token: string;
}

export async function sendVerificationEmail({
  email,
  name,
  token,
}: SendVerificationEmailProps) {

  const verificationLink =
    `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`;

  await resend.emails.send({

    from: "Ascendia <onboarding@resend.dev>",

    to: email,

    subject: "Verify your Ascendia account",

    html: `
      <div style="font-family:sans-serif;padding:40px;max-width:600px;margin:auto">
        
        <h1>Welcome to Ascendia 🚀</h1>

        <p>
          Hi ${name},
        </p>

        <p>
          Thank you for signing up.
          Please verify your email to activate your account.
        </p>

        <a
          href="${verificationLink}"
          style="
            display:inline-block;
            margin-top:20px;
            padding:14px 24px;
            background:#6366f1;
            color:white;
            text-decoration:none;
            border-radius:12px;
            font-weight:bold;
          "
        >
          Verify Email
        </a>

        <p style="margin-top:30px;color:#666">
          This link expires in 1 hour.
        </p>

      </div>
    `,
  });

}