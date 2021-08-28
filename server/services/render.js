
exports.homeRoutes = (req, res) => {
      res.render('index');      
}

exports.adminRoutes = (req, res) =>{
    res.render('admin');
}

exports.loginRoutes = (req, res) =>{
    res.render('auth/login');
}