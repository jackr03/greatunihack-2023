const express = require('express')
const router = express.Router()
const { getRooms, setRoom, updateRoom, deleteRoom } = require("../controllers/roomController")

router.route('/').post(setRoom)

router.route('/:id').delete(deleteRoom).put(updateRoom).get(getRooms)

module.exports = router