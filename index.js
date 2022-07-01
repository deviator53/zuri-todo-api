const express = require("express");
require('dotenv').config();
const { json } = require("express");
const flights = require("./controllers/todoController");
const models = require("./models/Todo");
const routes = require("./routes/todoRoutes");
const mongoose = require("mongoose");


const app = express();

app.use(json());


app.use("/", routes);



const port = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    app.listen(port, () => {
      console.log(`Database is connected and Server is running on port ${port}`);
    });
  })
  .catch((error)=>{
    console.log(error.message);
  })


