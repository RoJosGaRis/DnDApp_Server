const express = require("express");
const router = express.Router();
const CreatureBlock = require("../models/creatureBlock");

// GET All
router.get("/", async (req, res) => {
  try {
    const creatures = await CreatureBlock.find();
    res.send(creatures);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/names", async (req, res) => {
  try {
    const creatures = await CreatureBlock.find();
    const names = creatures.map((creature) => ({
      name: creature.name,
      id: creature._id,
    }));
    res.send(names);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET One
router.get("/:id", getCreature, (req, res) => {
  res.send(res.creature);
});

// POST One
router.post("/", async (req, res) => {
  const creature = new CreatureBlock({
    name: req.body.name,
    race: req.body.race,
    alignment: req.body.alignment,
    armorClass: req.body.armorClass,
    speed: req.body.speed,
    hitPoints: req.body.hitPoints,
    abilityScores: req.body.abilityScores,
    skills: req.body.skills,
    savingThrows: req.body.savingThrows,
    senses: req.body.senses,
    languages: req.body.languages,
    challenge: req.body.challenge,
    featuresAndTraits: req.body.featuresAndTraits,
    actions: req.body.actions,
    treasure: req.body.treasure,
  });

  try {
    const newCreature = await creature.save();
    res.status(201).json(newCreature);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PATCH One
router.patch("/:id", getCreature, async (req, res) => {});

// DELETE One
router.delete("/:id", getCreature, async (req, res) => {
  try {
    await res.creature.deleteOne();
    res.json({ message: "Deleted creature" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getCreature(req, res, next) {
  let creature;
  try {
    creature = await CreatureBlock.findById(req.params.id);
    if (creature == null) {
      return res.status(404).json({ message: "Cannot find creature" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.creature = creature;
  next();
}

module.exports = router;
