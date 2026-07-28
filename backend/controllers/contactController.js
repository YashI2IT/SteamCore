import nodemailer from 'nodemailer';

export const submitContact = async (req, res) => {
  try {
    const { name, email, company, company_size, phone, source, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required.' });
    }

    // Configure Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: process.env.SMTP_PORT || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const adminHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #1F4E79; padding: 24px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">STEAMCORE</h1>
          <p style="color: #93c5fd; margin: 5px 0 0 0; font-size: 14px;">New Website Inquiry</p>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #1F4E79; margin-top: 0;">Inquiry Details</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; width: 120px;">Name</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${name}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Email</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${email}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Phone</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${phone || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${company || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Company Size</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${company_size || '—'}</td></tr>
            <tr><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #64748b;">Source</td><td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #0f172a;">${source || '—'}</td></tr>
          </table>
          <h3 style="color: #1F4E79; margin-bottom: 8px;">Message:</h3>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    `;

    const adminMailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.SMTP_USER,
      subject: `New Inquiry — ${name} (${company || 'No Company'})`,
      html: adminHtml
    };

    // Auto-Responder Email HTML for the User
    const userHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #1F4E79; padding: 32px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1.5px;">STEAMCORE</h1>
          <p style="color: #93c5fd; margin: 8px 0 0 0; font-size: 15px;">Energy Engineering LLP</p>
        </div>
        <div style="padding: 40px 32px;">
          <h2 style="color: #0f172a; margin-top: 0; font-size: 22px;">Thank you for contacting us, ${name.split(' ')[0]}!</h2>
          <p style="color: #475569; font-size: 16px; line-height: 1.6;">We have successfully received your inquiry regarding <strong>Boiler Consultancy & Engineering Services</strong>.</p>
          <p style="color: #475569; font-size: 16px; line-height: 1.6;">Our engineering team is currently reviewing your requirements and will get back to you within 24 business hours to discuss how we can assist you.</p>
          
          <div style="margin-top: 32px; padding: 24px; background-color: #f8fafc; border-radius: 8px; border-left: 4px solid #F26522;">
            <p style="color: #64748b; font-size: 14px; margin: 0; text-transform: uppercase; font-weight: 600; letter-spacing: 0.5px;">Your Message</p>
            <p style="color: #334155; font-size: 15px; line-height: 1.6; margin-top: 8px; white-space: pre-wrap;">"${message}"</p>
          </div>
          
          <p style="color: #475569; font-size: 16px; line-height: 1.6; margin-top: 32px;">If you have any urgent queries, feel free to call us directly at <strong>+91 88508 47485</strong>.</p>
          
          <p style="color: #0f172a; font-size: 16px; font-weight: 600; margin-top: 32px; margin-bottom: 0;">Best Regards,</p>
          <p style="color: #475569; font-size: 16px; margin-top: 4px;">The SteamCore Engineering Team</p>
        </div>
        <div style="background-color: #f1f5f9; padding: 24px; text-align: center; color: #64748b; font-size: 13px;">
          <p style="margin: 0;">F-103 Greenscape Royale, Plot 25, Sector 7, Raigad – 410209</p>
          <p style="margin: 8px 0 0 0;">&copy; ${new Date().getFullYear()} SteamCore Energy Engineering LLP. All rights reserved.</p>
        </div>
      </div>
    `;

    const userMailOptions = {
      from: `"SteamCore Energy" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `Inquiry Received - SteamCore Energy Engineering`,
      html: userHtml
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
};
