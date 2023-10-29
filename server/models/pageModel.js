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
    imageData: {
      type: Buffer, // This defines an array of strings
       data: []
    },
  });
  
  // Create a Mongoose model using the schema
  const Room = mongoose.model('Room2', roomSchema);
  
  module.exports = Room;

  
  
  
  