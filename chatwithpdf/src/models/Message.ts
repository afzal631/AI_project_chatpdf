// /lib/models/Message.js
import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: "Chat", required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, enum: ["user", "system"], required: true },
});

export default mongoose.models.Message ||
  mongoose.model("Message", MessageSchema);
