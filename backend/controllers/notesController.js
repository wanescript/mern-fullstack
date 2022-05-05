//wrap each function with the async handler package
const asyncHandler = require('express-async-handler')

//models for the controller
const Notes = require('../models/notesModels')
const User = require('../models/userModel')

/*
CRUD functionality for the controller,
which is located inside the backend folder. */


//@description Get/READ notes
//@route  GET/api/notes
//@access Private

const getNotes = asyncHandler (async(req,res)=>{
    const notes = await Notes.find({user: req.user.id})
    res.status(200).json(notes)
})
//@description Set/CREATE goal
//@route  POST/api/notes
//@access Private

const setNotes = asyncHandler (async(req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter the correct key name')
    }
    const notes = await Notes.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(notes)
    // console.log(req.body)
    
})
//@description Update notes
//@route  PUT /api/notes/:id
//@access Private

const updateNotes = asyncHandler (async(req,res)=>{
    const notes = await Notes.findById(req.params.id)
    
    if(!notes){
        res.status(400)
        throw new Error('Goal not found');
    }

   

//check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }

    //make sure logged in user match goal user
    if(notes.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('User not authorized')

    }

    const updatedNotes = await Notes.findByIdAndUpdate(req.params.id,req.body,{new:true})

    res.status(200).json(updatedNotes)
    // console.log(`update notes function is coming from the controller folder.${req.params.id}`)
})
//@description Delete notes
//@route  DELETE/api/notes/:id
//@access Private

const deleteNotes = asyncHandler (async(req,res)=>{
    const notes = await Notes.findById(req.params.id)
      
    
    if(!notes){
        res.status(400)
        throw new Error('Goal not found');
    }

    

    //check for user
        if(!req.user){
            res.status(401)
            throw new Error('User not found')
        }
    
        //make sure logged in user match goal user
        if(notes.user.toString() !== req.user.id){
            res.status(401)
            throw new Error('User not authorized')
    
        }

    await notes.remove()

    res.status(200).json({id:req.params.id})
})


module.exports = {
    getNotes,
    setNotes,
    updateNotes,
    deleteNotes
}