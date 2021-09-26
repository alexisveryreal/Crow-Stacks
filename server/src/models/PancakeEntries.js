const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const defaultString = {
  type: String,
  default: '',
};

const pancakeEntrySchema = new Schema({
  title: requiredString,
  image: defaultString,
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  address: requiredString,
  visitDate: { type: Date, required: true },
  description: defaultString,
}, { timestamps: true });

const Pancakes = mongoose.model('Pancakes', pancakeEntrySchema);

module.exports = Pancakes;
