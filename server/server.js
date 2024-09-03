import express from "express";
const app = express();
app.use(express.json());

app.get("/", (request, response) => {
  response.json("you are looking at my root route, how roude!");
});

app.post("/messages", function (req, res) {
  console.log("req.body:", req.body);
  res.json({ status: "Message Received!" });
});

app.listen(8080, () => {
  console.log("App is listening on port 8080");
});
