const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/api");
const categoryRoutes = require("./routes/category");
const path = require("path");
require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

//connect to the database
mongoose
  .connect("mongodb://127.0.0.1/blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));

//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

app.use("/todos", apiRoutes);
app.use("/categories", categoryRoutes);

app.use((err, req, res, next) => {
  console.log(err);
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
