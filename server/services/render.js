const axios = require('axios');



exports.homeRoutes = (req, res) => {
    // Make a get request to /api/workouts
    axios.get('https://repulsive-trail-production.up.railway.app/api/workouts')
        .then(function(response){
            res.render('index', {workouts : response.data});
        })
}

exports.add_workout = (req, res) => {
    res.render('new_workout');
},

exports.update_workout = (req, res) => {
    axios.get('https://repulsive-trail-production.up.railway.app/api/workouts', {params : {id : req.query.id}})
    .then(function(workoutdata){
        res.render("update_workout", { workout : workoutdata.data})
    })
   .catch(err =>{
    res.send(err);
   })
}

