const express = require('express')
const router = express.Router()
const { getGoal, setGoal } = require ("../controller/goalController")

router.get('/', getGoals)

router.post('/', setGoals)



module.exports = router