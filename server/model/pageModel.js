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
    urls: {
      type: [String], // This defines an array of strings
    },
  });
  
  // Create a Mongoose model using the schema
  const Room = mongoose.model('Room', roomSchema);
  
  module.exports = Room;
  
  
  
  