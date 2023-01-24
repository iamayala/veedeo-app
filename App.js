import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import Home from "./src/screen/Home";
import {
	useFonts,
	DMSans_400Regular,
	DMSans_500Medium,
	DMSans_700Bold,
} from "@expo-google-fonts/dm-sans";
import {
	Dimensions,
	Image,
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from "react-native";
import AppScreen from "./src/components/Screen";
import fonts from "./src/constants/fonts";

export default function App() {
	const [openApp, setOpenApp] = useState(false);

	const handleOpenApp = () => {
		setOpenApp(true);
	};

	let [fontsLoaded] = useFonts({
		DMSans_400Regular,
		DMSans_500Medium,
		DMSans_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	if (openApp) {
		return <Home />;
	} else {
		return (
			<AppScreen backgroundColor="#FFFFFF">
				<View style={styles.Container}>
					<View style={styles.Modal}>
						<View style={styles.IconView}>
							<Image
								style={styles.Icon}
								source={require("./src/assets/logos/icon.png")}
							/>
						</View>
						<Text style={styles.Header}>Welcome to Veedeo</Text>
						<Text style={styles.Text}>
							This app was made to perform the video player - TikTok look-alike.
							Enjoy!
						</Text>
						<TouchableOpacity
							onPress={() => handleOpenApp()}
							style={styles.Button}
						>
							<Text style={styles.ButtonText}>Get Started</Text>
						</TouchableOpacity>
					</View>
				</View>
			</AppScreen>
		);
	}
}

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;
const styles = StyleSheet.create({
	Container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFFFFF",
	},
	Modal: {
		// backgroundColor: "white",
		width: WIDTH * 0.85,
		height: HEIGHT * 0.7,
		borderRadius: 10,
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 20,
		paddingLeft: 20,
	},
	IconView: {
		backgroundColor: "#0b233d",
		width: WIDTH * 0.3,
		height: WIDTH * 0.3,
		borderRadius: WIDTH * 0.15,
		alignItems: "center",
		justifyContent: "center",
	},
	Icon: {
		height: 50,
		width: 50,
	},
	Header: {
		fontWeight: "bold",
		fontSize: 22,
		marginTop: 30,
		marginBottom: 5,
		fontFamily: fonts.bold,
	},
	Text: {
		textAlign: "center",
		fontSize: 14,
		fontFamily: fonts.regular,
		marginHorizontal: 10,
	},
	Button: {
		backgroundColor: "#0b233d",
		height: 45,
		borderRadius: 50,
		width: WIDTH * 0.7,
		marginTop: 40,
		alignItems: "center",
		justifyContent: "center",
	},
	ButtonText: {
		color: "white",
		fontFamily: fonts.medium,
	},
});
