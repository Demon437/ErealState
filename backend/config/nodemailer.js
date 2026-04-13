import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('🚀 Email Service Initializing...');
console.log('🌍 NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('📨 EMAIL:', process.env.EMAIL || 'NOT SET');
console.log('📨 EMAIL_USER:', process.env.EMAIL_USER || 'NOT SET');

// ==========================================
// CREATE TRANSPORTER
// ==========================================
const createTransporter = () => {
  console.log('\n🔧 Creating SMTP transporter...');

  const smtpUserExists = !!process.env.SMTP_USER;
  const smtpPassExists = !!process.env.SMTP_PASS;

  if (!smtpUserExists || !smtpPassExists) {
    console.warn('⚠️ SMTP config missing!');
    console.warn('👉 SMTP_USER:', smtpUserExists ? 'FOUND' : 'MISSING');
    console.warn('👉 SMTP_PASS:', smtpPassExists ? 'FOUND' : 'MISSING');
  } else {
    console.log('✅ SMTP credentials found');
    console.log('📨 SMTP_USER:', process.env.SMTP_USER);
    console.log('🔑 SMTP_PASS:', 'FOUND');
  }

  console.log('📡 SMTP_HOST: smtp-relay.brevo.com');
  console.log('📡 SMTP_PORT: 587');
  console.log('🔒 SECURE: false');

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
  });

  // VERIFY CONNECTION
  transporter.verify((error, success) => {
    console.log('\n🧪 Running SMTP verify check...');
    if (error) {
      console.error('❌ SMTP Connection Failed');
      console.error('💥 Message:', error.message);
      console.error('📛 Code:', error.code || 'N/A');
      console.error('📡 Response:', error.response || 'N/A');
      console.error('⚙️ Command:', error.command || 'N/A');
    } else {
      console.log('✅ SMTP Server is ready to send emails');
      console.log('📬 Verify success:', success);
    }
  });

  return transporter;
};

const transporter = createTransporter();

// ==========================================
// SEND EMAIL FUNCTION
// ==========================================
export const sendEmail = async (mailOptions) => {
  try {
    console.log('\n📧 Preparing to send email...');
    console.log('----------------------------------');

    if (!mailOptions) {
      throw new Error('mailOptions object is missing!');
    }

    const finalFrom =
      mailOptions.from || `Webix Infotech <${process.env.EMAIL || process.env.EMAIL_USER}>`;

    const finalMailOptions = {
      ...mailOptions,
      from: finalFrom,
    };

    console.log('📨 FROM:', finalMailOptions.from || 'MISSING');
    console.log('📩 TO:', finalMailOptions.to || 'MISSING');
    console.log('📋 CC:', finalMailOptions.cc || 'NONE');
    console.log('📋 BCC:', finalMailOptions.bcc || 'NONE');
    console.log('📝 SUBJECT:', finalMailOptions.subject || 'MISSING');
    console.log('📄 TEXT EXISTS:', finalMailOptions.text ? 'YES' : 'NO');
    console.log('🌐 HTML EXISTS:', finalMailOptions.html ? 'YES' : 'NO');

    if (finalMailOptions.html) {
      console.log(
        '🧾 HTML PREVIEW:',
        finalMailOptions.html.substring(0, 200),
        finalMailOptions.html.length > 200 ? '...' : ''
      );
    }

    if (finalMailOptions.text) {
      console.log(
        '🧾 TEXT PREVIEW:',
        finalMailOptions.text.substring(0, 200),
        finalMailOptions.text.length > 200 ? '...' : ''
      );
    }

    console.log('----------------------------------');

    if (!finalMailOptions.to) {
      throw new Error('Recipient email is missing!');
    }

    if (!finalMailOptions.subject) {
      throw new Error('Email subject is missing!');
    }

    if (!finalMailOptions.text && !finalMailOptions.html) {
      throw new Error('Email content is missing! Provide text or html.');
    }

    const startTime = Date.now();

    console.log('🚀 Calling transporter.sendMail()...');

    const result = await transporter.sendMail(finalMailOptions);

    const endTime = Date.now();

    console.log('\n✅ Email Sent Successfully!');
    console.log('📨 Message ID:', result.messageId);
    console.log('📡 Response:', result.response);
    console.log('👥 Accepted:', result.accepted || []);
    console.log('🚫 Rejected:', result.rejected || []);
    console.log('📦 Pending:', result.pending || []);
    console.log('⏱️ Time Taken:', `${endTime - startTime} ms`);
    console.log('----------------------------------\n');

    return result;
  } catch (error) {
    console.error('\n❌ EMAIL SEND ERROR');
    console.error('----------------------------------');
    console.error('💥 Message:', error.message);
    console.error('📛 Code:', error.code || 'N/A');
    console.error('📡 Response:', error.response || 'N/A');
    console.error('⚙️ Command:', error.command || 'N/A');
    console.error('📍 Stack:', error.stack);
    console.error('----------------------------------\n');

    throw error;
  }
};

// ==========================================
// TEST EMAIL FUNCTION
// ==========================================
export const sendTestEmail = async (toEmail) => {
  try {
    console.log('\n🧪 Sending test email...');
    console.log('📩 Test recipient:', toEmail);

    const result = await sendEmail({
      to: toEmail,
      subject: 'Brevo SMTP Test Email',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #222;">Test Email</h2>
          <p>If you received this email, your Brevo SMTP is working correctly.</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
      text: `Test Email\n\nIf you received this email, your Brevo SMTP is working correctly.\nTime: ${new Date().toLocaleString()}`
    });

    console.log('✅ Test email function completed');
    return result;
  } catch (error) {
    console.error('❌ Test email failed:', error.message);
    throw error;
  }
};

// ==========================================
// HEALTH CHECK
// ==========================================
export const checkEmailHealth = async () => {
  console.log('\n🩺 Checking Email Service Health...');

  const smtpUserExists = !!process.env.SMTP_USER;
  const smtpPassExists = !!process.env.SMTP_PASS;
  const emailExists = !!(process.env.EMAIL || process.env.EMAIL_USER);

  console.log('👉 SMTP_USER:', smtpUserExists ? 'FOUND' : 'MISSING');
  console.log('👉 SMTP_PASS:', smtpPassExists ? 'FOUND' : 'MISSING');
  console.log('👉 EMAIL / EMAIL_USER:', emailExists ? 'FOUND' : 'MISSING');

  if (!smtpUserExists || !smtpPassExists) {
    console.error('❌ Email service unhealthy - Missing SMTP credentials');
    return {
      status: 'error',
      message: 'SMTP credentials not configured',
    };
  }

  if (!emailExists) {
    console.error('❌ Email service unhealthy - Missing sender email');
    return {
      status: 'error',
      message: 'Sender email not configured',
    };
  }

  console.log('✅ Email service healthy');
  return {
    status: 'healthy',
    message: 'Email service is operational via Brevo SMTP',
    smtpUser: process.env.SMTP_USER,
    senderEmail: process.env.EMAIL || process.env.EMAIL_USER,
  };
};

export default transporter;