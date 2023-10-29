const mongoose= require('mongoose')

const roomSchema = new mongoose.Schema({
    keyroom: {
      type: Number,
      required: true,
    },
    hostid: {
      type: Number,
      required: true,
    },
    password: {
      type: Number,
      required: true,
    },
    text: {
      type: String, // This defines an array of strings
    },
  });
  
  // Create a Mongoose model using the schema
  const Room = mongoose.model('Room2', roomSchema);
  
  module.exports = Room;
  
  
  
  