const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: String,
  image: String,
  imagedos: String,
  imagetres: String,
  description: String,
  fecha: String,
  fuente: String
  

});

module.exports = mongoose.model('Produno', NoteSchema);
