const express = require('express');
const route = express.Router()

const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */

route.get('/', services.homeRoutes);

/**
 * @description adding workouts
 * @method GET /
 */

route.get('/add-workout', services.add_workout);

/**
 * @description updating workouts
 * @method GET /
 */

route.get('/update-workout', services.update_workout);

// API
route.post('/api/workouts', controller.create);
route.get('/api/workouts', controller.find);
route.put('/api/workouts/:id', controller.update);
route.delete('/api/workouts/:id', controller.delete);
module.exports = route