const uploadService = require('./upload.service')

module.exports = {
	uploadVideo,
}

async function uploadVideo(req, res) {
	try {
		const uploadedResponse = await uploadService.uploadVideo(req.body.data)
		res.json({ data: uploadedResponse })
	} catch (err) {
		console.log(err)
		res.status(500).json({ err })
	}
}
