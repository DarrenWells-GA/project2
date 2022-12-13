const axios = require('axios');



exports.homeRoutes = (req, res) => {
    // Make a get request to /api/workouts
    axios.get('http://localhost:3000/api/workouts')
        .then(function(response){
            res.render('index', {workouts : response.data});
        })
        .catch(err =>{
            res.send(err);
        })
}

exports.add_workout = (req, res) => {
    res.render('new_workout');
},

exports.update_workout = (req, res) => {
    res.render('update_workout');
}