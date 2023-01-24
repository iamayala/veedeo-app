import React from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import fonts from "../constants/fonts";

const Tabs = () => {
	const Menu = ({ label, image }) => {
		return (
			<TouchableOpacity style={styles.Menu}>
				<Image style={styles.Icon} source={image} />
				<Text style={styles.MenuText}>{label}</Text>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.Container}>
			<Menu label="home" image={require("../assets/icons/home.png")} />
			<Menu label="search" image={require("../assets/icons/discover.png")} />

			<TouchableOpacity style={styles.Menu}>
				<View style={styles.Button}>
					<Feather name="plus" size={25} />
				</View>
			</TouchableOpacity>

			<Menu label="inbox" image={require("../assets/icons/message.png")} />
			<Menu label="you" image={require("../assets/icons/profile.png")} />
		</View>
	);
};

export default Tabs;
const styles = StyleSheet.create({
	Container: {
		height: 59,
		width: "100%",
		position: "absolute",
		bottom: 0,
		borderTopWidth: 1,
		flexDirection: "row",
		backgroundColor: "#0b233d",
	},
	Menu: {
		width: "20%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	Icon: {
		resizeMode: "contain",
		height: 32,
		width: 32,
	},
	MenuText: {
		fontSize: 9,
		marginTop: 3,
		color: "#fff",
		textTransform: "capitalize",
		fontFamily: fonts.medium,
	},
	Button: {
		width: 45,
		height: 35,
		backgroundColor: "#fff",
		borderRadius: 8,
		justifyContent: "center",
		alignItems: "center",
	},
});
