import React from 'react'

import { Feather } from '@expo/vector-icons'

import { StyleSheet, View, Text, Image } from 'react-native'

const Info = ({ user }) => {
	return (
	<View style={styles.Container}>
		<View style={styles.User}>
			<Text style={styles.UserName}>@{user.username}</Text>
			<Image style={styles.Checked} source={require('../assets/icons/checked.png')} />
		</View>
		<Text style={styles.Description}>{user.description}</Text>
		<View style={styles.Music}>
			<Feather name='music' size={18} color="white" />
			<Text style={styles.MusicName}>{user.music}</Text>
		</View>
	</View>
	)
}

export default Info
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent: 'flex-end',
		marginBottom: 70,
		marginLeft: 13,
	},
	User: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	UserName: {
		fontSize: 17,
		color: 'rgba(255, 255, 255, 1)',
		fontWeight: "bold",
		letterSpacing: -.3
	},
	Checked: {
		width: 16,
		height: 16,
		marginRight: 5,
		marginLeft: 5,
	},
	Description: {
		fontSize: 17,
		color: 'rgba(255, 255, 255, 0.8)',
		letterSpacing: -.2,
		marginTop: 6,
		width: '80%'
	},
	Music: {
		marginTop: 13,
		width: '80%',
		flexDirection: 'row',
		alignItems: 'center'
	},
	MusicName: {
		fontSize: 15,
		color: '#fff',
		marginLeft: 10,
		marginTop: -4
	}
})
