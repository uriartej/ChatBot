import express from "express"

const app = express();

app.use(express.json());

app.post("/hello", (req,res,next) => {
  console.log(req.body.name);
  return res.send("Hello");
});

app.listen(5000, () => console.log("Server Open"));