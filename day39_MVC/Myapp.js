const mongoose = require("mongoose");
const express = require("express");

const app = express();
const PORT = 6004;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/StudentsNew")
  .then(() => {
    console.log("Database running successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const studentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  course: String,
});

const studentModel = mongoose.model("StudentDb", studentSchema);

app.post("/student", async (req, res) => {
  const student = new studentModel(req.body);
  await student.save();
  res.json(student);
});

app.get("/student", async (req, res) => {
  const student = await studentModel.find();
  res.json(student);
  console.log(student);
});

app.get("/student/:id", async (res, req) => {
  const student = await studentModel.findById(req.params.id);
  res.json(student);
});

app.delete("/student/:id", async (req, res) => {
  await studentModel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

app.put("/student/:id", async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // This returns the updated document instead of the original.
    );
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error });
  }
});



app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
