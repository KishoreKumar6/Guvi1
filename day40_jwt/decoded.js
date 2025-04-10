const jwt = require('jsonwebtoken');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNmM5YTdlNDQxNjkxYTNmM2ZiNjJmIiwibmFtZSI6ImRoaXZ5YSJ9LCJpYXQiOjE3NDQyMjY5NTEsImV4cCI6MTc0NDIzMDU1MX0.ojzF6LnwpH6c-qEtJ-yGSSrSWsTxZ2N3ipA6gTESuNY"; // Replace with your actual token
const decoded = jwt.decode(token);
console.log(decoded);
