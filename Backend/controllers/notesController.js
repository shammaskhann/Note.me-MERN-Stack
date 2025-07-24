const Note = require("../models/Note");

exports.getNotes = async (req, res, next) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    next(err);
  }
};

exports.getNoteById = async (req, res, next) => {
  try {
    const note = await Note.findOne({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.createNote = async (req, res, next) => {
  try {
    const { content, color } = req.body;
    const updatedAt = new Date();

    const note = new Note({ content, color, updatedAt, userId: req.user.id });
    await note.save();
    res.status(201).json(note);
  } catch (err) {
    next(err);
  }
};

exports.updateNote = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { content, color } = req.body;
    console.log("USER ID" + req.user.id);
    console.log("_ID" + id);
    console.log("CONTENT" + content);
    console.log("COLOR" + color);
    const updatedAt = new Date();
    const note = await Note.findOneAndUpdate(
      { _id: id, userId: req.user.id },
      { content, color, updatedAt },
      { new: true }
    );
    console.log("NOTE" + note);
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json(note);
  } catch (err) {
    next(err);
  }
};

exports.deleteNote = async (req, res, next) => {
  try {
    console.log("ID" + req.params.id);
    console.log("USER ID" + req.user.id);
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });
    if (!note) return res.status(404).json({ message: "Note not found" });
    res.json({ message: "Note deleted" });
  } catch (err) {
    next(err);
  }
};
