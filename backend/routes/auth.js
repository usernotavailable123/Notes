const express = require('express');
const User = require('../models/User');

const router = express.Router();
const { body, validationResult } = require('express-validator');
const { restart } = require('nodemon');

//Create a User using : POST "/api/auth/createuser". Doesn't require Authentication

router.post('/createuser',[
    body('name','Enter a valid name').isLength({min:3}),
    body('email','Enter a valid email').isEmail(),
    body('password','Password must be atleast of length 5').isLength({min:5})
],async (req,res) => {
   //if there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user exists already with the same email!!!
    try{
        let user = await User.findOne({email:req.body.email});
        if(user){
            return res.status(400).json({error:'User with this email already exists'})
        } 
        user = await User.create({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password,
          })
          
        res.json(user)
    }catch(error){
        console.log(error.message);
        res.status(500).send('Some error occured')
    }
    
})
module.exports = router;