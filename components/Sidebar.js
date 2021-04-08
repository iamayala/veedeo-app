import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


const Sidebar = ({ avatar, count }) => {
	const [liked, setLiked] = useState(false)

	const handleLike = () => {
		setLiked(!liked)
	}
	return (
		<View style={styles.Container}>
			
			<TouchableOpacity onPress={() => handleLike()} style={styles.Menu}>
				{ liked ? <MaterialIcons name="favorite" size={35} color="red" /> : <MaterialIcons name="favorite" size={35} color="white" /> }				
				<Text style={styles.Count} >{count.like}</Text>
			</TouchableOpacity>

			<View style={styles.Menu}>
				<View style={styles.User}>
					<Image style={styles.Avatar} resizeMode='cover' source={avatar} />
				</View>
			</View>


			{/* <View style={styles.Menu}>
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
			</View> */}
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
		marginBottom: 5
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