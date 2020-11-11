import React from "react";
import {StyleSheet, View, Text} from "react-native";

const styles = StyleSheet.create({
	CircleButton: {
		position: "absolute",
		bottom: 32,
		right: 32,
		width: 48,
		height: 48,
		borderRadius: 24,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {width: 0, height: 2},
		shadowOpacity: 0.3,
		shadowRadius: 3,
		zIndex: 10,
	},
	CircleButtonTitle: {
		lineHeight: 32,
		fontSize: 32,
	},
});

const CircleButton = (data) => {
	const {style, color, center} = data;
	let bgColor = "#E31676";
	let textColor = "#fff";
	if (color == "white") {
		bgColor = "#fff";
		textColor = "#E31676";
	}

	return (
		<View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
			<Text style={[styles.CircleButtonTitle, {color: textColor}]}>
				{center}
			</Text>
		</View>
	);
};

export default CircleButton;
