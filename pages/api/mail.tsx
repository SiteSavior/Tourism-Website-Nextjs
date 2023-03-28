import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  const { name, email, Contact, Country, Hotel, Day, startDate, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nikhilrajput243@gmail.com",
      pass: "wamyhqnzhxyqupoj",
    },
  });

  try {
    await transporter.sendMail({
      from: `${name} <${email}>`,
      to: "ruhipatel243@gmail.com , info@vivaindia.asia",
      subject: 'Client Query',
      text: `Client Details: 
      Client Name : ${name}
      Email: (${email})
      Phone: ${Contact} 
      Country: ${Country}
      Hotel Category : ${Hotel}
      Days: ${Day}
      Arrival in India: ${startDate}
      Special Requirements: ${message}}`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred." });
  }
}
