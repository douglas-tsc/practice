import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchMediaAction } from './actions'

// MediaGalleryPage Component
class MediaGalleryPage extends Component {
	// We want to get images and videos from the API right after our component renders.
	componentDidMount() {
		this.props.dispatch(searchMediaAction('rain'))
	}

	render() {
		console.log(this.props.images, 'Images')
		console.log(this.props.videos, 'Videos')
		console.log(this.props.selecteImage, 'SelectedImage')
		console.log(this.props.selectedVideo, 'SelectedVideo')
		return <div> </div>
	}
}

const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
})

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(MediaGalleryPage)
