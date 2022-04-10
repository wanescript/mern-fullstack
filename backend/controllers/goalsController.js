
/*
CRUD functionality in the controller folder, which is located inside the backend folder. */


//@description Get/READ goals
//@route  GET/api/goals
//@access Private

const getGoals = (req,res)=>{
    res.status(200).json({msg:'get goals'})
    console.log('get goals function is coming from the controller folder')
}
//@description Set/CREATE goal
//@route  POST/api/goals
//@access Private

const setGoals = (req,res)=>{
    res.status(200).json({msg:'create goal'})
    console.log('create goals function is coming from the controller folder')
}
//@description Update goals
//@route  PUT /api/goals/:id
//@access Private

const updateGoals = (req,res)=>{
    res.status(200).json({msg:`Update goal ${req.params.id}`})
    console.log(`update goals function is coming from the controller folder.${req.params.id}`)
}
//@description Delete goals
//@route  DELETE/api/goals/:id
//@access Private

const deleteGoals = (req,res)=>{
    res.status(200).json({msg:`Delete goal ${req.params.id}`})
    console.log(`delete goals function is coming from the controller folder.${req.params.id}`)
}


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}