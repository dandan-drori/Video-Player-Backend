const cloudinary = require('../../utils/cloudinary')

module.exports = {
	getVideos,
}

async function getVideos(
	folderName = 'video_player',
	sortBy = 'public_id',
	order = 'desc',
	maxResults = 30
) {
	const { resources } = await cloudinary.search
		.expression(`folder:${folderName}`)
		.sort_by(sortBy, order)
		.max_results(maxResults)
		.execute()
	return resources.map(({ public_id, uploaded_at }) => {
		return { publicId: public_id, uploadedAt: uploaded_at }
	})
}
