const cloudinary = require('../../utils/cloudinary')

module.exports = {
	uploadVideo,
}

async function uploadVideo(fileStr) {
	return await cloudinary.uploader.upload(fileStr, {
		upload_preset: 'video_player',
		resource_type: 'video',
		chunk_size: 6000000,
	})
}
