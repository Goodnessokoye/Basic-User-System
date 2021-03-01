const mongoose = require("mongoose")
const express = require("express") 

const app = require("express")()

app.use(express.json());


mongoose.connect("mongodb://localhost/UserSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("connected to mongodb..."))
  .catch((err) => console.error("could not connect to mongodb...", err));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on ${port}...`));