const asyncHandler = require('express-async-handler')
const Room = require('../models/roomModel')

// Checks existence of records for a given id
const getRooms = async (req, res) => { 
    const rooms = await Room.count( { keyroom: { $eq: req.body.keyroom } } )
    if (rooms == 0) {
        res.status(404).json("not ok")
    } else {
        res.status(200).json(
            "ok"
        )
    }
}

// Actually returns records at id
const returnRooms = async (req, res) => { 
    const rooms = await Room.find( { keyroom: { $eq: req.body.keyroom } } )
    if (JSON.stringify(rooms) == "[]") {
        res.status(404).json("not ok")
    } else {
        res.status(200).json({
            rooms
        })
    }
}

// Return all collections
const getAllRooms = async (req, res) => { 
    console.log("Get all rooms")
    const rooms = await Room.find()
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
    getRooms, setRoom, updateRoom, deleteRoom, getAllRooms, returnRooms
}