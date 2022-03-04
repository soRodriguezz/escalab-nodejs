const Category = require("../models/category");
const slugify = require("slugify");

exports.create = async (req, res) => {
  const { name } = req.body;
  const category = new Category({ name, slug: slugify(name) });
  try {
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: "Error creating category", error });
  }
};

exports.list = async (req, res) => {
  res.json(
    await Category.find({ status: "Active" }).sort({ createdAt: -1 }).exec()
  );
};

exports.read = async (req, res) => {
  let category = await Category.findOne({ 
    slug: req.params.slug,
    status: "Active",
  }).exec();

 res.json( category );

};

exports.update = async (req, res) => {
  const { name } = req.body;
  try{
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name) },
      { new: true }
    ).exec();
    res.json(updated);
  } catch(err) {
    res.status(500).send("Error updating category");
  }
};

exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete(
      { slug: req.params.slug }
    ).exec();
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Error removing category");
  }
};

// soft-delete
exports.removeSoft = async (req, res) => {
  try {
    const deleted = await Category.findOneAndUpdate(
      { slug: req.params.slug },
      { status: "Inactive" },
      { new: true }
    ).exec();
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Error removing category");
  }
};