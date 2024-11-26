const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = 8084;

// Middleware
app.use(cors());
app.use(express.json());

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Rename file to avoid conflicts
  },
});

const upload = multer({ storage });

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL, // Your email from environment variables
    pass: process.env.PASSWORD, // Your email password from environment variables
  },
});

// Contact Form Route
app.post('/contact', async (req, res) => {
    const { name, email, contact, subject, message } = req.body;
  
    // Validate required fields
    if (!name || !email || !contact || !subject || !message) {
      return res.status(400).json({ message: 'All fields must be filled.' });
    }
  
    try {
      // Send email with form data
      await transporter.sendMail({
        from: process.env.EMAIL, // Sender email
        to: process.env.EMAIL, // Recipient email (your email)
        subject:` Contact Form: ${subject}`,
        text: `
          Name: ${name}
          Email: ${email}
          Contact: ${contact}
          Message: ${message}
        `,
        html: `
          <h1>Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No:</strong> ${contact}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });
  
      // Respond to the client
      res.status(200).json({ message: 'Your message has been sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Failed to send your message. Please try again later.' });
    }
  });



// Careers Form Submission Route
app.post('/careers', upload.single('cv'), async (req, res) => {
  const { name, email, phone, gender, qualification, experience, linkedin, message } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !gender || !qualification || !experience || !req.file) {
    return res.status(400).json({ message: 'All required fields must be filled, including CV.' });
  }

  try {
    // Send email with form data and attachment
    await transporter.sendMail({
      from: process.env.EMAIL, // Your email
      to: process.env.EMAIL, // Recipient email (company's email)
      subject: 'New Career Application',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Gender: ${gender}
        Qualification: ${qualification}
        Experience: ${experience}
        LinkedIn: ${linkedin || 'Not Provided'}
        Message: ${message || 'No message provided'}
      `,
      html: `
        <h1>New Career Application</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Qualification:</strong> ${qualification}</p>
        <p><strong>Experience:</strong> ${experience}</p>
        <p><strong>LinkedIn:</strong> ${linkedin || 'Not Provided'}</p>
        <p><strong>Message:</strong> ${message || 'No message provided'}</p>
      `,
      attachments: [
        {
          filename: req.file.originalname,
          path: req.file.path, // Path to the uploaded CV
        },
      ],
    });

    // Respond to client
    res.status(200).json({ message: 'Your application has been submitted successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to submit your application. Please try again later.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});