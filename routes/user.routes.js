const router = require('express').Router()

const {
    newUser,
    getUser,
    deleteUser,
    allUsers,
    updateUser
} = require('../controllers/user.controllers')

router.route('/new').post(newUser)
router.route('/:id').get(getUser)
router.route('/delete/:id').delete(deleteUser)
router.route('/edit/').patch(updateUser)
router.route('/').get(allUsers)

module.exports = router