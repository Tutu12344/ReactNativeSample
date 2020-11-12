import React, {useState, useEffect} from "react";
import {StyleSheet, View} from "react-native";
import * as Font from "expo-font";
import {createIconSet} from "@expo/vector-icons";

import fontAwsome from "../../assets/fonts/fa-solid-900.ttf";

const CustomIcon = createIconSet(
	{
		pencil: "\uf303",
		plus: "\uf067",
	},
	"FontAwsome",
);

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
		fontFamily: "FontAwsome",
		lineHeight: 32,
		fontSize: 24,
	},
});

const CircleButton = (data) => {
	const {style, color, name} = data;
	const [fontLoaded, setFontLoaded] = useState(false);
	let bgColor = "#E31676";
	let textColor = "#fff";
	if (color == "white") {
		bgColor = "#fff";
		textColor = "#E31676";
	}
	useEffect(() => {
		const fn = async () => {
			await Font.loadAsync({
				FontAwsome: fontAwsome,
			});
		};
		fn();
		setFontLoaded(true);
	}, []);
	return (
		<View style={[styles.CircleButton, style, {backgroundColor: bgColor}]}>
			{fontLoaded ? (
				<CustomIcon
					name={name}
					style={[styles.CircleButtonTitle, {color: textColor}]}
				/>
			) : null}
		</View>
	);
};

export default CircleButton;
