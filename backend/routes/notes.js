const express = require('express')
const { getNotes, setNotes, updateNotes, deleteNotes } = require('../controllers/notesController')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')


//below is a short cut to chain on multiple functions
router.route('/').get(protect,getNotes).post(protect,setNotes)
router.route('/:id').put(protect,updateNotes).delete(protect,deleteNotes)







//Below are the regular examples of simplifying routes and controller functions

// router.put('/:id', (updateNotes))

// router.delete('/:id', (deleteNotes))


module.exports = router
