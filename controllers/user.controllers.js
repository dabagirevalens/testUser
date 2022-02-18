const User = require('../models/user.model')

exports.newUser = async (req, res) => {

    try {
        const { userName, givenName, surName, DOB } = req.body

        const user = await User.create({
            userName: userName,
            givenName: givenName,
            surName: surName,
            DOB: DOB
        })

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'something went wrong'
            })
        }

        res.status(200).json({
            success: true,
            user,
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}


exports.getUser = async (req, res) => {

    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            })
        }

        return res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.updateUser = async (req, res) => {

    try {

        const { userName, givenName, surName, DOB } = req.body

        const user = await User.findByIdAndUpdate(req.params.id, {
            userName,
            givenName,
            surName,
            DOB
        }, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        })

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found."
            })
        }

        return res.status(200).json({
            success: true,
            message: "User update successfully."
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }

}

exports.allUsers = async (req, res) => {
    try {

        const users = await User.find({})

        if (!users) {
            return res.status(400).json({
                success: false,
                message: 'no users found'
            })
        }

        return res.status(200).json({
            success: true,
            users
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'no user found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'user deleted successfully'
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}