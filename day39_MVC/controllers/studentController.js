const Student = require('../models/studentModel');
// Get all students
exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};


// Create a new student
exports.createStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.json(student);
};


// Get student by ID
exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};


// Update student by ID
exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};
// Delete student by ID
exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};