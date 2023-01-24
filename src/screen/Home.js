import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Hero from "../components/Hero";
import AppScreen from "../components/Screen";
import Tabs from "../components/Tabs";

import api from "../services/api";

const Home = () => {
	return (
		<AppScreen>
			<StatusBar
				translucent
				backgroundColor="transparent"
				barStyle="light-content"
			/>
			<View style={styles.Container}>
				<Hero videos={api} />
				<Tabs />
			</View>
		</AppScreen>
	);
};

export default Home;
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "transparent",
	},
});
