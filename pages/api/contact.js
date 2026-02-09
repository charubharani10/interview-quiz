import sgMail from '@sendgrid/mail';

// Initialize SendGrid with your API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    // Validate the input
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Create the email content
    const msg = {
      to: process.env.CONTACT_EMAIL, // Your email address
      from: process.env.FROM_EMAIL, // Verified sender email
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send the email
    await sgMail.send(msg);

    // Send a confirmation email to the user
    const confirmationMsg = {
      to: email,
      from: process.env.FROM_EMAIL,
      subject: 'Thank you for contacting Quiz Interview',
      text: `
        Dear ${name},

        Thank you for contacting Quiz Interview. We have received your message and will get back to you as soon as possible.

        Best regards,
        Quiz Interview Team
      `,
      html: `
        <h2>Thank you for contacting Quiz Interview</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting Quiz Interview. We have received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Quiz Interview Team</p>
      `,
    };

    await sgMail.send(confirmationMsg);

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Error sending email' });
  }
} 