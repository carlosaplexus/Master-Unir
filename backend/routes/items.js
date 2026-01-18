/**
 * CRUD con Mongo
 */

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  createdAt: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", ItemSchema);

// GET todos
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// GET uno por ID
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  res.json(item);
});

// POST crear
router.post("/", async (req, res) => {
  const item = new Item({ name: req.body.name });
  await item.save();
  res.json(item);
});

// PUT actualizar
router.put("/:id", async (req, res) => {
  const updated = await Item.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  res.json(updated);
});

// DELETE borrar
router.delete("/:id", async (req, res) => {
  const deleted = await Item.findByIdAndDelete(req.params.id);
  res.json({ message: "Item eliminado", deleted });
});

module.exports = router;



// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");

// const ItemSchema = new mongoose.Schema({
//   name: String,
//   createdAt: { type: Date, default: Date.now }
// });

// const Item = mongoose.model("Item", ItemSchema);

// // GET todos
// router.get("/", async (req, res) => {
//   const items = await Item.find();
//   res.json(items);
// });

// // POST crear
// router.post("/", async (req, res) => {
//   const item = new Item({ name: req.body.name });
//   await item.save();
//   res.json(item);
// });

// module.exports = router;
