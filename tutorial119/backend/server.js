import express from "express";
import cors from "cors";

const app = express();
const port = 3000;

// The Shields: Allow frontend access and parse JSON data
app.use(cors());
app.use(express.json());

// The Receiver: Catch the data sent from React
app.post('/', (req, res) => {
  console.log("🔥 DATA RECEIVED FROM REACT: ", req.body);
  
  // Send a confirmation receipt back to React
  res.send({ message: "Backend says: Form Data Received Successfully!" });
});

app.listen(port, () => {
  console.log(`Backend engine running on http://localhost:${port}`);
});