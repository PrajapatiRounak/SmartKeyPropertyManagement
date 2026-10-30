import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sendNotificationEmail } from "./emailService.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Email server running" });
});

app.post("/api/send-email", async (req, res) => {
  try {
    const { name, email, phone, message, plan, services, type } = req.body;

    if (!name && !email && !phone && !message) {
      return res.status(400).json({ error: "Please provide form details." });
    }

    const result = await sendNotificationEmail({
      name,
      email,
      phone,
      message,
      plan,
      services,
      type,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully!",
      id: result.data?.id,
    });
  } catch (error) {
    console.error("Resend email error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to send email.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Email server running on http://localhost:${PORT}`);
});
