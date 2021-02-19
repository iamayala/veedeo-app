import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


const Sidebar = ({ avatar, count }) => {
	return (
		<View style={styles.Container}>
			<View style={styles.Menu}>
				<View style={styles.User}>
					<Image style={styles.Avatar} resizeMode='cover' source={avatar} />
				</View>
			</View>

			<View style={styles.Menu}>
				<Image style={styles.Icon} resizeMode='contain' source={require('../assets/icons/like.png')} />
				<Text style={styles.Count} >{count.like}</Text>
			</View>

			<View style={styles.Menu}>
				<Image 
					style={styles.Icon}
					resizeMode='contain'
					source={require('../assets/icons/comment.png')}
				/>
				<Text style={styles.Count}>{count.comment}</Text>
			</View>

			<View style={styles.Menu}>
				<Image style={styles.Icon} resizeMode='contain' source={require('../assets/icons/share.png')} />
				<Text style={styles.Count}>{count.share}</Text>
			</View>

			<View style={styles.Menu}>
				<View style={styles.SoundBg}>
					<Image style={styles.Sound} resizeMode='cover' source={avatar} />
				</View>
			</View>
		</View>
	)
}

export default Sidebar
const styles = StyleSheet.create({
	Container: {
		width: 60,
		height: '100%',
		paddingBottom: 59,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	Menu: {
		marginTop: 9,
		marginBottom: 9,
		marginLeft: 0,
		marginRight: 0,
		alignItems: 'center'
	},
	User: {
		width: 45,
		height: 45,
		marginBottom: 13
	},
	Avatar: {
		width: 45,
		height: 45,
		borderRadius: 48,
		borderWidth: 2,
		borderColor: '#fff'
	},
	Icon: {
		height: 35
	},
	Count: {
		color: '#fff',
		fontSize: 12,
		letterSpacing: -.1,
	},
	SoundBg: {
		backgroundColor: '#1f191f',
		width: 50,
		height: 50,
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 20
	},
	Sound: {
		width: 25,
		height: 25,
		borderRadius: 20
	}
})