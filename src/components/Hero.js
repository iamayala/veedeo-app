import React, { useState } from "react";

import { Dimensions, StyleSheet, View } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Swiper from "react-native-swiper";
import Info from "./Info";
import Sidebar from "./Sidebar";
import VideoPlayer from "./VideoPlayer";

const { height } = Dimensions.get("window");

const Hero = ({ videos }) => {
	const [selected, setSelected] = useState(0);

	return (
		<Swiper horizontal={false} showsButtons={false}>
			{videos.map((item, index) => {
				return (
					<View key={index}>
						<VideoPlayer
							video={item.video}
							poster={item.poster}
							isPlay={selected === index}
						/>
						<LinearGradient
							style={styles.Gradient}
							locations={[0, 0.26, 0.6, 1]}
							colors={[
								"rgba(26,26,26,0.6)",
								"rgba(26,26,26,0)",
								"rgba(26,26,26,0)",
								"rgba(26,26,26,0.6)",
							]}
						>
							<View style={styles.Center}>
								<Info user={item.user} />
								<Sidebar avatar={item.user.avatar} count={item.count} />
							</View>
						</LinearGradient>
					</View>
				);
			})}
		</Swiper>
	);
};

export default Hero;
const styles = StyleSheet.create({
	Container: {
		height: height,
	},
	Gradient: {
		height: "100%",
		justifyContent: "space-between",
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		zIndex: 1,
	},
	Center: {
		flex: 1,
		flexDirection: "row",
	},
});
