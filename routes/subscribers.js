const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// GET All
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.send(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET One
router.get("/:id", (req, res) => {
  res.send("");
});

// POST One
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subscribedToChanel: req.body.subscribedToChanel,
  });

  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH One
router.patch("/:id", (req, res) => {});

// DELETE One
router.delete("/:id", (req, res) => {});

module.exports = router;
