const asyncHandler = require('express-async-handler')
const Room = require('../models/roomModel')

// Checks existence of records for a given id
const getRooms = async (req, res) => { 
    console.log("Get room")
    const rooms = await Room.count( { keyroom: { $eq: req.body.keyroom } } )
    console.log(rooms)
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
    // if (!req.body.text) {
    //     res.status(400)
    //     throw new Error("Please add a text field")
    // }
    // generate random 4-digit int 
    const random4DigitNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    const room = await Room.create({
        keyroom: random4DigitNumber,
        hostid: 1,
        password: 1,
        text: "sidjsakdjajdsa"
      });
    // set session of keyroom: 
    req.session.keyroom = random4DigitNumber; 
    res.status(201).json("ok")
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