import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("you are looking at my root route, how roude!");
});

app.post("/messages", (req, res) => {
  res.json(req.body); // sending the thing we got back, like repeating a phone number to make sure you wrote it down correctly
});

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
