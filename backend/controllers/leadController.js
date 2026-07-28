import Lead from '../models/Lead.js';
import nodemailer from 'nodemailer';

const sendLeadEmail = async (leadData) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"SteamCore AI" <${process.env.SMTP_USER}>`,
      to: process.env.COMPANY_EMAIL,
      subject: `New Lead: ${leadData.requirement} from ${leadData.fullName}`,
      html: `
        <h2>New Lead Generated from AI Chatbot</h2>
        <p><strong>Name:</strong> ${leadData.fullName}</p>
        <p><strong>Company:</strong> ${leadData.companyName || 'N/A'}</p>
        <p><strong>Industry:</strong> ${leadData.industry || 'N/A'}</p>
        <p><strong>Email:</strong> ${leadData.email}</p>
        <p><strong>Phone:</strong> ${leadData.phoneNumber}</p>
        <p><strong>City:</strong> ${leadData.city || 'N/A'}</p>
        <p><strong>Requirement:</strong> ${leadData.requirement}</p>
        <p><strong>Budget:</strong> ${leadData.budget || 'N/A'}</p>
        <p><strong>Preferred Contact:</strong> ${leadData.preferredContactMethod || 'Email'}</p>
        <p><strong>Message:</strong><br/> ${leadData.message || 'N/A'}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error('Error sending lead email:', error);
    // Don't fail the lead creation if email fails
  }
};

export const createLead = async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    
    // Attempt to send email notification
    if (process.env.SMTP_USER && process.env.COMPANY_EMAIL) {
      await sendLeadEmail(lead);
    }

    res.status(201).json({ success: true, data: lead });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error', error: error.message });
  }
};

export const getLeads = async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json({ success: true, data: leads });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const deleteLead = async (req, res) => {
  try {
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: 'Lead deleted' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
