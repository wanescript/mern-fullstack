
//@description Get goals
//@route  GET/api/goals
//@access Private

const getGoals = (req,res)=>{
    res.status(200).json({msg:'get goals'})
    console.log('get goals coming from the controller folder')
}
//@description Set goal
//@route  POST/api/goals
//@access Private

const setGoals = (req,res)=>{
    res.status(200).json({msg:'create goal'})
    console.log('create goal')
}
//@description Update goals
//@route  Update/api/goals
//@access Private

const updateGoals = (req,res)=>{
    res.status(200).json({msg:`Update goal ${req.params.id}`})
    console.log('update goals function is coming from the controller folder.')
}
//@description Delete goals
//@route  DELETE/api/goals
//@access Private

const deleteGoals = (req,res)=>{
    res.status(200).json({msg:`Delete goal ${req.params.id}`})
    console.log('delete goals are coming from the controller folder')
}


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}