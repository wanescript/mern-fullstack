const express = require('express')
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalsController')
const router = express.Router()


//below is a short cut to chain on multiple functions
router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)







//Below are the regular examples of simplifying routes and controller functions

// router.put('/:id', (updateGoals))

// router.delete('/:id', (deleteGoals))


module.exports = router
