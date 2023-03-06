const User = require('../../models/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const postLogin = async (req, res)=>{
    try {
        const { mail, password} = req.body
        
        const user = await User.findOne({mail})

        if(!user && (await bcrypt.compare(password, user.password))){
            return res.status(400).send('Invalid credentials. Please try again')
        }

        const token = jwt.sign({userId: user._id, mail}, process.env.JWT_SECRET, {
            expiresIn:'24h'
        })


      return  res.status(201).json({
            userDetails:{
                mail: mail,
                token,
                username: user.username
            }
        })
    } catch (err) {
        return res.status(500).send('Something wet wrong. please try again')
    }
}


module.exports = postLogin