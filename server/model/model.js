const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    typeOfWorkout: {
        type : String,
        required: true,
        unique: true
    },
    muscleGroup: {
        type : String,
        required: true,
        unique: true
    },
    goal: {
        type : String,
        required: true,
        unique: true
    },
    previousGoal: {
        type : String,
        required: true,
        unique: true
    },
    
    
})

const Workouts = mongoose.model('workouts', schema)

module.exports = Workouts