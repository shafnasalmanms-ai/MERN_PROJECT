const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// ➤ CREATE Student
router.post("/", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.json({ message: "Student added", student });
  } catch (err) {
    res.json(err);
  }
});

// ➤ GET All Students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.json(err);
  }
});

// ➤ UPDATE Student
router.put("/:id", async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.json(err);
  }
});

// ➤ DELETE Student
router.delete("/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted" });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;