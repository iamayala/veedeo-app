import React from 'react'
import { StatusBar, StyleSheet, View } from 'react-native'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tabs from '../components/Tabs'

import api from '../services/api'

const Home = () => {
	return (
		<>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<View style={styles.Container}>
				<Header />
				<Hero videos={api} />
				<Tabs />
			</View>
		</>
	)
}

export default Home
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: 'transparent',
	}
})
