const express = require("express");
const mongoose = require("mongoose");

// create the express app
const app = express();
const port = 5002;

// middlware to parse JSON
app.use(express.json())

// connect to mongodb
mongoose.connect("mongodb://127.0.0.1:27017/7thaprilmvc2025")
.then(() => console.log("Mongodb is connected successfully"))
.catch((err) => console.log(err));

// create the mongoose schema and model
const studentSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number,
    course: String
})

const Student = mongoose.model("Student", studentSchema);

// routes

// to post the value 
app.post("/students", async(req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student)
})

// get route
app.get("/students", async(req, res) => {
    const students = await Student.find();
    res.json(students);
    console.log(students)
})


app.get("/students/:id", async(req, res) => {
    const student = await Student.findById(req.params.id)
    res.json(student)
})


app.put("/students/:id", async(req, res) => {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(student)
})


app.delete("/students/:id", async(req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({message: "Student deleted successfully"})
})


app.listen(port, () => {
    console.log(`Server is running at the port number ${port}`)
})