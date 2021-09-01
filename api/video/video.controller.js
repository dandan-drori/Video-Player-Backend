const videoService = require('./video.service')

module.exports = {
	getVideos,
}

async function getVideos(req, res) {
	try {
		const publicIds = await videoService.getVideos()
		res.send(publicIds)
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
