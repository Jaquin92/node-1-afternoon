const express = require("express");
const bodyParser = require("body-parser");
const {
  create,
  Read,
  Update,
  Destroy
} = require("./controllers/messages_controller");

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + "/../public/build"));
app.post("/api/messages", create);
app.get("/api/messages/", Read);
app.put("/api/messages/:id", Update);
app.delete("/api/messages/:id", Destroy);
const port = 3000;
app.listen(port, () => {
  console.log(`This is my ${port}`);
});
