const express = require('express')
const router = express.Router()
const { getRooms, setRoom, updateRoom, deleteRoom, getAllRooms, returnRooms } = require("../controllers/roomController")

router.route('/').post(setRoom).get(getAllRooms)
router.route('/find').post(getRooms)
router.route('/return').get(returnRooms)
router.route('/:id').delete(deleteRoom).put(updateRoom)

module.exports = router