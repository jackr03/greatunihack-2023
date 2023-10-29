const asyncHandler = require('express-async-handler')
const Room = require('../models/roomModel')

const getRooms = async (req, res) => { 
    const rooms = await Room.find()
    console.log("Room key is: " + req.body.keyroom)
    const roomkey= rooms.users.find({roomkey: req.body.keyroom},{},{},{})
    res.status(200).json(rooms)
}

const setRoom = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error("Please add a text field")
    }

    const room = await Room.create({
        keyroom: req.body.keyroom,
        hostid: req.body.hostid,
        password: req.body.password,
        text: req.body.text
      });
    res.status(201).json(room)
})

const updateRoom = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update room ${req.params.id}` })
})

const deleteRoom = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Delete room ${req.params.id}` })
})

module.exports = {
    getRooms, setRoom, updateRoom, deleteRoom
}