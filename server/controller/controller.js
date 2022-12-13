var Workouts = require('../model/model');

// create and save new workout
exports.create = (req, res) => {
    // validate the request
    if(!req.body){
        res.status(400).send({ message : "Content can not be empty!"});
    }

    // new workout
    const workout = new Workouts({
        typeOfWorkout: req.body.typeOfWorkout,
        muscleGroup: req.body.muscleGroup,
        goal: req.body.goal,
        previousGoal: req.body.previousGoal,
    })

    // save the workout in the database
    workout
    .save(workout)
    .then(data => {
//        res.send(data)
        res.redirect('/add-workout')
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "some error occurred while creating a create operation"
        });
    });
}

// retrieve and return all workouts/ retrieve and return a single workout
exports.find = (req, res) => {
    Workouts.find()
    .then(workout => {
        res.send(workout)
    })
    .catch(err => {
        res.status(500).send({ message : err.message || "Error occurred while retrieving user information"})
    })
}

// update a new workout by workout id
exports.update = (req, res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message : "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Workouts.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if(!data) {
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe workout not found!`})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({ message : "Error update workout information"})
    })
}

// Delete a workout with a specified workout id in the request
exports.delete = (req, res) => {
    const id =req.params.id;

    Workouts.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot delete with id ${id}. Maybe the id is wrong`})

        }else{
            res.send({message : "Workout was deleted successfully"})
        }
    })
    .catch(err => {
        res.status(500).send({ message : "Could not delete Workout with id=" + id})
    })
}