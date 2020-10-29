const express = require("express");
const multer = require("multer");

const uploadConfig = require("./src/config/upload");

const app = express();
const upload = multer(uploadConfig);

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({ status: "ok"})
});

app.post("/image", upload.single("image"), (req, res) => {
 
  console.log(req.query, "query");
  console.log(req.body, "body");
  return res.json(req.body);
  
});
app.post("/image/:id", (req, res) => {
 
  console.log(req.params, "params");

  return res.json(req.params.id);
  
});

app.listen(3333);