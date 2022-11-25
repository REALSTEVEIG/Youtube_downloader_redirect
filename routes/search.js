const express = require('express')
const router = express()

const {search, index} = require('../controllers/search')

router.route('/search').get(search)
router.route('/index').get(index)

module.exports = router