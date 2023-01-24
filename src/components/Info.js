import React, { useState } from "react";
import { Feather, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import fonts from "../constants/fonts";

const Info = ({ user }) => {
	const [numberOfLines, setNumberOfLines] = useState(3);

	const handleNumberOfLines = () => {
		setNumberOfLines(10);
	};

	return (
		<View style={styles.Container}>
			<View style={styles.User}>
				<Text style={styles.UserName}>@{user.username}</Text>
				<Image
					style={styles.Checked}
					source={require("../assets/icons/checked.png")}
				/>
			</View>
			<TouchableOpacity onPress={() => handleNumberOfLines()}>
				<Text numberOfLines={numberOfLines} style={styles.Description}>
					{user.description}
				</Text>
			</TouchableOpacity>
			<View style={styles.Music}>
				<MaterialIcons name="music-note" size={20} color="white" />
				<Text style={styles.MusicName}>{user.music}</Text>
			</View>
		</View>
	);
};

export default Info;
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 70,
		marginLeft: 13,
	},
	User: {
		flexDirection: "row",
		alignItems: "center",
	},
	UserName: {
		fontSize: 17,
		color: "rgba(255, 255, 255, 1)",
		letterSpacing: -0.3,
		fontFamily: fonts.bold,
	},
	Checked: {
		width: 16,
		height: 16,
		marginRight: 5,
		marginLeft: 5,
	},
	Description: {
		fontSize: 15,
		color: "rgba(255, 255, 255, 0.8)",
		marginTop: 6,
		width: "80%",
		fontFamily: fonts.medium,
	},
	Music: {
		marginTop: 13,
		width: "80%",
		flexDirection: "row",
		alignItems: "center",
	},
	MusicName: {
		fontSize: 15,
		color: "#fff",
		marginLeft: 10,
		marginTop: -4,
		fontFamily: fonts.medium,
	},
});
