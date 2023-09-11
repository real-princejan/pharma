import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from 'jsonwebtoken';

// REGISTER POST
export const registerController = async (req, res) => {
    try{
        const {name, email, password, phone, address} = req.body

        // validation
        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'Password is required'})
        }
        if(!phone){
            return res.send({error:'Phone Number is required'})
        }
        if(!address){
            return res.send({error:'Address is required'})
        }

        // Check User
        const existingUser = await userModel.findOne({email})

        // Existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message:'Already registered email please login',
            })
        }

        // Registering user
        const hashedPassword = await hashPassword(password)

        // Saving user
        const user = await new userModel({
            name, 
            email, 
            phone, 
            address, 
            password:hashedPassword,
        }).save();

        res.status(201).send({
            success:true,
            message:'User created successfully',
            user
        });


    }catch (error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Registration',
            error
        });
    }
};

// LOGIN POST
export const loginController = async(req, res) => {
    try {
        const {email, password} = req.body
        // validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            });
        }
        // Checking user 
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email not registered'
            });
        }

        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            });
        }

        // token
        const token = await JWT.sign({_id:user._id}, process.env.JWT_SECRET, {expiresIn:"7d",});
        res.status(200).send({
            success:true,
            message:'Login Successfully',
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        });

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        });
    }
};


// FORGOT PASSWORD

// TEST CONTROLLER
export const testController = (req, res) => {
    try {
     res.send ('Protected Routes');

    } catch (error) {
        console.log(error);
        res.send({error});
    }
   
};