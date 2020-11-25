import React, {useState, useEffect} from "react";
import {StyleSheet, View, Text} from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import firebase from "firebase";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
	},
});

const MemoListScreen = (data) => {
	const [memoList, setMemoList] = useState([]);
	useEffect(() => {
		const {currentUser} = firebase.auth();
		const db = firebase.firestore();
		db.collection(`users/${currentUser.uid}/memos`).onSnapshot((snapshot) => {
			const tempList = [];
			snapshot.forEach((doc) => {
				tempList.push({...doc.data(), key: doc.id});
			});
			setMemoList(tempList);
		});
		/*
			.get()
			.then((querySnapshot) => {
				// console.log(querySnapshot);
				const tempList = [];
				querySnapshot.forEach((doc) => {
					// console.log(doc);
					tempList.push({...doc.data(), key: doc.id});
				});
				setMemoList(tempList);
			})
			.catch((error) => {
				console.log(error);
			});*/
		// console.log("will mount");
	}, []);
	const handlePress = () => {
		// const currentUser = data.route.params.currentUser;
		data.navigation.navigate("MemoCreate");
	};

	return (
		<View style={styles.container}>
			<MemoList memoList={memoList} navigation={data.navigation} />
			<CircleButton name="plus" onPress={handlePress} />
		</View>
	);
};

export default MemoListScreen;
