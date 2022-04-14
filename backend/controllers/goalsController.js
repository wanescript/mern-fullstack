//wrapping each function with the async handler package
const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModels')
const User = require('../models/userModel')
/*
CRUD functionality in the controller folder, which is located inside the backend folder. */


//@description Get/READ goals
//@route  GET/api/goals
//@access Private

const getGoals = asyncHandler (async(req,res)=>{
    const goals = await Goal.find({user: req.user.id})
    res.status(200).json(goals)
})
//@description Set/CREATE goal
//@route  POST/api/goals
//@access Private

const setGoals = asyncHandler (async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter the correct key name')
    }
    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal)
    // console.log(req.body)
    
})
//@description Update goals
//@route  PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler (async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id)

//check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure logged in user match goal user
    if(goal.user.toString() !== user.id){
        res.status(401)
        throw new Error('User not authorized')

    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedGoal)
    // console.log(`update goals function is coming from the controller folder.${req.params.id}`)
})
//@description Delete goals
//@route  DELETE/api/goals/:id
//@access Private

const deleteGoals = asyncHandler (async(req,res)=>{
    const goal = await Goal.findById(req.params.id)
      
    
    if(!goal){
        res.status(400)
        throw new Error('Goal not found');
    }

    const user = await User.findById(req.user.id)

    //check for user
        if(!user){
            res.status(401)
            throw new Error('User not found')
        }
    
        //make sure logged in user match goal user
        if(goal.user.toString() !== user.id){
            res.status(401)
            throw new Error('User not authorized')
    
        }

    await goal.remove()

    res.status(200).json({id:req.params.id})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}