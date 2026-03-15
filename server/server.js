const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
});

app.post('/api/send-resume', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
        <h2 style="color: #0f172a;">Hello! 👋</h2>
        <p style="color: #334155; line-height: 1.5;">Thank you for your interest in my profile. As requested, here is the link to my online resume and portfolio:</p>
        <div style="margin: 25px 0;">
            <a href="https://odshub.pp.ua/" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">View Resume Online</a>
        </div>
        <p style="color: #334155; line-height: 1.5;">You can also reply directly to this email to get in touch with me.</p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">
        <p style="color: #64748b; font-size: 12px;">Best regards,<br><strong>Denys Orlyk</strong><br>Junior Fullstack Developer<br><a href="mailto:denys.orlyk@outlook.com">denys.orlyk@outlook.com</a></p>
    </div>
    `;

    try {
        await transporter.sendMail({
            from: `"Denys Orlyk" <${process.env.SMTP_USER}>`,
            to: email,
            subject: 'Denys Orlyk - Fullstack Developer Resume',
            html: emailHtml
        });
        
        res.status(200).json({ message: 'Resume sent successfully!' });
    } catch (error) {
        console.error('SMTP Error:', error);
        res.status(500).json({ error: 'Failed to send email.' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
});