const User = require('../models/user_model.js');

// Create and Save a new User
exports.signup = (req, res) => {
    // // Validate request
    if(!req.body.full_name) {
        return res.status(400).send({
            message: "User fullname can not be empty"
        });
    }
    else if(!req.body.phone) {
        return res.status(400).send({
            message: "User phone can not be empty"
        });
    }

    else if(!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }
    else if(!req.body.password) {
        return res.status(400).send({
            message: "User password can not be empty"
        });
    }
    else if(!req.body) {
        return res.status(400).send({
            message: "Please enter user full_name,phone,email.password"
        });
    }

    // Create a User
    const user = new User({
        full_name: req.body.full_name, 
        phone: req.body.phone,
        email:req.body.email,
        password:req.body.password
    });

    // Save User in the database
    user.save()
    .then(users => {
        res.send({key:users._id});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
};

//User login with email and password
exports.login= (req,res)=>{
     // // Validate request
     if(!req.body.email) {
        return res.status(400).send({
            message: "User email can not be empty"
        });
    }
    else if(!req.body.password) {
        return res.status(400).send({
            message: "User password can not be empty"
        });
    }
  User.findOne(req.body).select("-password")
    .then(users=>{
        if (users!=null) {
          res.send(users);
        } else {
          res.send({ message: "No user exists" });
        }
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        });
    })

};

