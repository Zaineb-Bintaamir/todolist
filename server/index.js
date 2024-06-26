const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");

const app = express();
//use express.json() to get data into json format
app.use(express.json());
//Port
const PORT = 5500;

//use cors
app.use(cors());

//import routes
const TodoItemRoute = require("./routes/todoItems");

//connect to mongodb ..
mongoose
  .connect("mongodb://172.31.15.95:27017/todolist")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use("/", TodoItemRoute);

//connect to server
app.listen(PORT, () => console.log("Server connected"));
