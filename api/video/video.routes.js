const express = require('express')
const router = express.Router()

const { getVideos } = require('./video.controller')

router.get('/', getVideos)

module.exports = router
