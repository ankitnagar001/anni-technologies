import nodemailer from 'nodemailer';

export const sendEmail = async ({ to, subject, html, text }) => {
  try {
    if (!process.env.SMTP_USER || process.env.SMTP_USER === 'test@example.com') {
      console.log(`[Email Mock] To: ${to} | Subject: ${subject}`);
      return { success: true, mocked: true };
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const info = await transporter.sendMail({
      from: `"Anni Software" <${process.env.SMTP_USER}>`,
      to,
      subject,
      text: text || '',
      html: html || text
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error(`[Email Error] ${error.message}`);
    return { success: false, error: error.message };
  }
};
