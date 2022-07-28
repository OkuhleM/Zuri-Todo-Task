require("dotenv").config();
const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => console.log('("I am connected to mongodb")'))
  .catch((err) => console.log(err));
console.log("process.env.MONGO_URI", process.env.MONGO_URI);
const todoTask = mongoose.Schema({
  title: {
    type: "string",
    required: true,
  },

  description: {
    type: "string",
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model("todo", todoTask);
