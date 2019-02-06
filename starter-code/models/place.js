const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeShcema = new Schema(
  {
    name: String,
    type: {
      type: String,
      enum: ["coffee shop", "bookstore"]
    },
    location: Object//mirar el requerimiento de objetos. Esto no tira.
  },
  {
    timestamps: true
  }
);

const Place = mongoose.model("Place", placeShcema);
module.exports = Place;
