const express = require("express");

const itemRoutes = require("./routes/item.routes");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require("./database-mysql");
// const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors());

app.use("/api/posts", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
