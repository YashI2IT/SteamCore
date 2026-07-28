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

    // Setup email data
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // typically sending from your own authenticated email
      replyTo: email,
      to: process.env.SMTP_USER, // sending it to yourself (the admin)
      subject: `New Inquiry — ${name} (${company || 'No Company'})`,
      text: `
You have received a new inquiry from the SteamCore Website:

Name: ${name}
Email: ${email}
Phone: ${phone || '—'}
Company: ${company || '—'}
Company Size: ${company_size || '—'}
Source: ${source || '—'}

Message:
${message}
      `,
      html: `
        <h2>New Inquiry from SteamCore Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || '—'}</p>
        <p><strong>Company:</strong> ${company || '—'}</p>
        <p><strong>Company Size:</strong> ${company_size || '—'}</p>
        <p><strong>Source:</strong> ${source || '—'}</p>
        <h3>Message:</h3>
        <p style="white-space: pre-wrap;">${message}</p>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.', error: error.message });
  }
};
