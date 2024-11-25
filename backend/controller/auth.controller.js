import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import genrateTokenAndSetCookie from '../Utilies/genrateToken.js';

export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password don't match" })
        }

         const user = await User.findOne({username});

            if(user){
                return res.status(400).json({error:`${username}, already exist!`})
            }
            // Hash password Here
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);

            const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=Scott${username}`
            const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=Scott${username}`

            const newUser = new User.create({
                fullname,
                username,
                password: hashedPassword,
                gender,
                profilePic: gender === "male" ? boyProfilePic : girlProfilePic  
            })

           if(newUser){
            // genrate jwt token here 
            genrateTokenAndSetCookie( newUser._Id, res);
            
            await newUser.save();    
            
            res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
           }else{
            res.status(400).json({error: "Invaild user data" })
           }
    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}

export const login = async (req, res) => {
   try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid username or password"})
        }
        genrateTokenAndSetCookie(user._id, res)
        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        }) 

   } catch (error) {
    console.log("Error in login controller", error.message)
        res.status(500).json({error:"Internal server error"})
   }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({Message: "Logged out successfully"})
         
    } catch (error) {
        console.log("Error in logout controller", error.message)
        res.status(500).json({error:"Internal server error"})
    }
}
