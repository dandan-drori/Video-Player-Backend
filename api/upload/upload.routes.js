const express = require('express')
const router = express.Router()
const { uploadVideo } = require('./upload.controller')

router.post('/', uploadVideo)

module.exports = router
