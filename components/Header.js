import React from 'react'

import { StyleSheet, View, Text } from 'react-native'


const Header = () => {
	return (
		<View style={styles.Container}>
			<Text style={styles.Menu}>Veedeo</Text>
		</View>
	)
}

export default Header
const styles = StyleSheet.create({
	Container: {
		top: 22,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		position: "absolute",
		backgroundColor: 'black'
	},
	Menu: {
		color: '#fff',
		marginTop: 11,
		marginBottom: 11,
		marginRight: 12,
		marginLeft: 12,
		fontSize: 16
	},
	Separator: {
		width: 1,
		height: 13,
		backgroundColor: '#d8d8d8',
		opacity: 0.6,
	}
})