const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  exercises: [
  {
    name: {
      type: String,
      trim: true,
      required: "Enter Exercise Name"
    },
    type: String,
    trim: true,
    required: "Enter Exercise Type"
  },
  distance : {
    type: Number
  },
  duration : {
    type: Number,
    required: "Enter Exercise Duration"
  },
  weight : {
    type: Number
  },
  sets : {
    type: Number
  },
  reps : {
    type: Number
  },
  ]
});



const Excercise = mongoose.model("Transaction", exerciseSchema);

module.exports = Excercise;