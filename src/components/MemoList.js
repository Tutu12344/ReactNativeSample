import React from "react";
import {StyleSheet, View, Text, TouchableHighlight} from "react-native";
import {FlatList} from "react-native-gesture-handler";

const styles = StyleSheet.create({
	memoList: {
		width: "100%",
		flex: 1,
	},
	memoListItem: {
		padding: 16,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
		backgroundColor: "#fff",
	},
	memoTitle: {
		fontSize: 18,
		marginBottom: 4,
	},
	memoDate: {
		fontSize: 12,
		color: "#a2a2a2",
	},
});

const MemoList = (data) => {
	const dateString = (date) => {
		// console.log(date.toDate().toISOString());
		const str = date.toDate().toISOString();
		return str.split("T")[0];
	};
	const renderMemo = ({item}) => {
		return (
			<TouchableHighlight
				onPress={() => {
					data.navigation.navigate("MemoDetail", {memo: item});
				}}>
				<View style={styles.memoListItem}>
					<Text style={styles.memoTitle}>{item.body}</Text>
					<Text style={styles.memoDate}>{dateString(item.createOn)}</Text>
					{console.log(item)}
				</View>
			</TouchableHighlight>
		);
	};
	// data.memoList.forEach((memo) => {
	// 	list.push(renderMemo(memo));
	// });
	return (
		<View style={styles.memoList}>
			<FlatList data={data.memoList} renderItem={renderMemo}></FlatList>
		</View>
	);
};

export default MemoList;
