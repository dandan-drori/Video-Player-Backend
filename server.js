require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(cors())

const videoRoutes = require('./api/video/video.routes')
const uploadRoutes = require('./api/upload/upload.routes')

app.use('/api/video', videoRoutes)
app.use('/api/upload', uploadRoutes)

const port = process.env.PORT || 3030
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
