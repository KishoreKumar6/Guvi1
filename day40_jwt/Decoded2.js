const jwt = require('jsonwebtoken');

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdmNmM5YTdlNDQxNjkxYTNmM2ZiNjJmIiwibmFtZSI6ImRoaXZ5YSJ9LCJpYXQiOjE3NDQyMjY5NTEsImV4cCI6MTc0NDIzMDU1MX0.ojzF6LnwpH6c-qEtJ-yGSSrSWsTxZ2N3ipA6gTESuNY"; // Replace with your actual token

const secret = "HKSJGDFHSKALFHKSJDLFHJSDKFHDSHRJKLEHRJKLFHJLDHFJKSDFHNSDFHJDSFSDSFHDSIFDKFDJFJKDSHFJKLEHRJHE";      // Replace with the secret key used to sign the token

jwt.verify(token, secret, (err, decoded) => {
  if (err) {
    console.error("Token verification failed:", err);
    return;
  }
  console.log("Decoded token data:", decoded);
});
