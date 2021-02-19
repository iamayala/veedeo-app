import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import { Feather } from '@expo/vector-icons'

import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'

const Tabs = () => {
	return (
		<View style={styles.Container}>
			<TouchableOpacity style={styles.Menu}>
				<Image style={styles.Icon} source={require('../assets/icons/home.png')} />
				<Text style={styles.MenuText} active='true'>Home</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Menu}>
				<Image style={styles.Icon} source={require('../assets/icons/discover.png')} />
				<Text style={styles.MenuText}>Search</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Menu}>
				<LinearGradient
					style={styles.Border}
					start={{ x: 1, y: 0 }}
					locations={[0, 0.5, 0.5, 1]}
					colors={['#F42365', '#f42365', '#37d7cf', '#37d7cf']}>
					<View style={styles.Button}>
						<Feather name='plus' size={20} />
					</View>
				</LinearGradient>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Menu}>
				<Image style={styles.Icon} source={require('../assets/icons/message.png')} />
				<Text style={styles.MenuText}>inbox</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.Menu}>
				<Image style={styles.Icon} source={require('../assets/icons/profile.png')} />
				<Text style={styles.MenuText}>You</Text>
			</TouchableOpacity>
		</View>
	)
}

export default Tabs
const styles = StyleSheet.create({
	Container: {
		height: 59,
		width: '100%',
		position: "absolute",
		bottom: 0,
		borderTopWidth: 1,
		borderTopColor: 'rgba(255, 255, 255, 0.2)',
		flexDirection: 'row',
		backgroundColor: 'black'
	},
	Menu: {
		width: '20%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	Icon: {
		resizeMode: 'contain',
		height: 32,
		width: 32
	},
	MenuText: {
		fontSize: 9,
		marginTop: -3,
		color: '#fff',
		textTransform: 'capitalize'
	},
	Border: {
		width: 44,
		height: 32,
		marginTop: -5,
		borderRadius: 8,
		alignItems: 'center'
	},
	Button: {
		width: 36,
		height: 32,
		backgroundColor: '#fff',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	}
})