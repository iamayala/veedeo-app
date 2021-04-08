import React from 'react'
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
				<View style={styles.Button}>
					<Feather name='plus' size={25} />
				</View>
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
		flexDirection: 'row',
		backgroundColor: '#0b233d'
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
		width: 45,
		height: 35,
		backgroundColor: '#fff',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center'
	}
})