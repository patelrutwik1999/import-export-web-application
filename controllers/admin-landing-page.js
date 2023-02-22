exports.adminLandingPage = (req, res) => {
    res.locals = { title: 'Dashboard' };
    res.render('Dashboard/index');
}