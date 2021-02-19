import React from 'react'

import { Video } from 'expo-av'

import { StyleSheet, ImageBackground, Dimensions } from 'react-native'

const VideoPlayer = ({ video, poster, isPlay }) => {
	return isPlay ? (
		<Video
			style={styles.Play}
			rate={1.0}
			volume={1.0}
			isMuted={false}
			shouldPlay
			useNativeControls={false}
			posterSource={poster}
			source={video}
			resizeMode='cover'
		/>
	) : (
		<ImageBackground style={styles.Poster} source={poster} />
	)
}

export default VideoPlayer
const WIDTH = Dimensions.get("screen").width
const styles = StyleSheet.create({
	Poster: {
		height: '100%',
		width: WIDTH
	},
	Play: {
		height: '100%',
		width: WIDTH
	}
})
