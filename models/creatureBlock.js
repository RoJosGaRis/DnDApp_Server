const mongoose = require("mongoose");

const creatureBlock = new mongoose.Schema({
  name: { type: String, required: true },
  race: { type: String, required: true },
  alignment: { type: String, required: true },
  armorClass: { type: Number, required: true },
  speed: { type: String, required: true },
  hitPoints: { type: Number, required: true },
  abilityScores: {
    strength: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
    dexterity: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
    constitution: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
    intelligence: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
    wisdom: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
    charisma: {
      value: { type: Number, required: true },
      modifier: { type: Number, required: true },
    },
  },
  skills: { type: String, required: true },
  savingThrows: { type: String, required: true },
  senses: { type: String, required: true },
  languages: { type: String, required: true },
  challenge: { type: String, required: true },
  featuresAndTraits: { type: String, required: true },
  actions: { type: String, required: true },
  treasure: { type: String, required: true },
});

module.exports = mongoose.model("CreatureBlock", creatureBlock);
