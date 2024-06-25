import { Resend } from 'resend';
import config from '@/config';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({ to, subject, text, html, replyTo }: { to: string, subject: string, text: string, html: string, replyTo: string }) => {
  await resend.emails.send({
    from: config.mailgun.fromAdmin,
    to: to,
    reply_to: replyTo,
    subject: subject,
    text: text,
    html: html,
  });
};