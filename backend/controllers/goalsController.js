//wrapping each function with the async handler package
const asyncHandler = require('express-async-handler')
/*
CRUD functionality in the controller folder, which is located inside the backend folder. */


//@description Get/READ goals
//@route  GET/api/goals
//@access Private

const getGoals = asyncHandler (async(req,res)=>{
    res.status(200).json({msg:'get goals'})
    console.log('get goals function is coming from the controller folder')
})
//@description Set/CREATE goal
//@route  POST/api/goals
//@access Private

const setGoals = asyncHandler (async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter the correct key name')
    }else {
    res.status(200).json({msg:'Goal created'})
    console.log('create goals function is coming from the controller folder')
    // console.log(req.body)
    }
})
//@description Update goals
//@route  PUT /api/goals/:id
//@access Private

const updateGoals = asyncHandler (async(req,res)=>{
    res.status(200).json({msg:`Update goal ${req.params.id}`})
    console.log(`update goals function is coming from the controller folder.${req.params.id}`)
})
//@description Delete goals
//@route  DELETE/api/goals/:id
//@access Private

const deleteGoals = asyncHandler (async(req,res)=>{
    res.status(200).json({msg:`Delete goal ${req.params.id}`})
    console.log(`delete goals function is coming from the controller folder.${req.params.id}`)
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}