const User = require('../../models/userModel')
const bcrypt = require('bcryptjs')

const postRegister = async (req, res)=>{
    try {
        const { username, mail, password} = req.body
        const userExists = await User.exists({mail})
        
        if(userExists){
            return res.status(409).send('E-mail already in use.')
        }

        const encryptedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        })
    const token = jwt.sign({userId: user._id, mail}, process.env.JWT_SECRET, {
        expiresIn:'24h'
    })
        res.status(201).json({
            userDetails:{
                mail: user.mail,
                token,
                username: user.username
            }
        })
    } catch (err) {
        return res.status(500).send('Error ocurred. please try again')
    }
}


module.exports = postRegister