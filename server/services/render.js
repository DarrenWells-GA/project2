
exports.homeRoutes = (req, res) => {
    res.render('index');
}

exports.add_workout = (req, res) => {
    res.render('new_workout');
}

exports.update_workout = (req, res) => {
    res.render('update_workout');
}