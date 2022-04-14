const express = require('express')
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalsController')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')


//below is a short cut to chain on multiple functions
router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/:id').put(protect,updateGoals).delete(protect,deleteGoals)







//Below are the regular examples of simplifying routes and controller functions

// router.put('/:id', (updateGoals))

// router.delete('/:id', (deleteGoals))


module.exports = router
