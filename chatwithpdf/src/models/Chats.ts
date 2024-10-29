import mongoose from "mongoose";

const chatSchema = new mongoose.Schema(
  {
    pdfname: { type: String, required: true }, // Document name for the chat context
    pdfurl: { type: String, required: true }, // Document URL if used in the chat
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }, // Reference to the user who owns the chat
    filekey: { type: String, required: true }, // A unique file key for accessing the document
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }], // Links to the messages in the chat session
  },
  { timestamps: true, collection: "Chat" }
);

const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);

export default Chat;
