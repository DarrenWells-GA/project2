const express = require('express');
const route = express.Router()

const services = require('../services/render');

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

module.exports = route