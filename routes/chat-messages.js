const router = require("express").Router();
let ChatMessage = require("../models/chat-message.model");

router.get("/", async (req, res) => {
  try {
    let chatMessages = await ChatMessage.find();
    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// returns all incoming messages sent to a specific user
router.get("/receiverUsername/:username", async (req, res) => {
  try {
    let chatMessages = await ChatMessage.find({ receiverUsername: req.params.receiverUsername });
    chatMessages.sort()
    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

// returns all outgoing messages sent to a specific user
router.get("/senderUsername/:username", async (req, res) => {
  try {
    let chatMessages = await ChatMessage.find({ senderUsername: req.params.senderUsername });
    chatMessages.sort()
    res.json(chatMessages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})

router.post("/add", async (req, res) => {
  try {
    let {senderUsername, receiverUsername, message} = req.body;
    let newChatMessage = new ChatMessage({
      senderUsername,
      receiverUsername,
      message,
    });
    await newChatMessage.save();
    res.json("ChatMessage saved");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let chatMessage = await ChatMessage.findById(req.params.id);
    res.json(chatMessage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await ChatMessage.findByIdAndDelete(req.params.id);
    res.json("ChatMessage deleted");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/update/:id", async (req, res) => {
  try {
    let chatMessage = await ChatMessage.findById(req.params.id);
    [chatMessage.senderUsername, chatMessage.receiverUsername, chatMessage.message] = [
      req.body.senderUsername,
      req.body.receiverUsername,
      req.body.message,
    ];
    await chatMessage.save();
    res.json("ChatMessage  updated");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});