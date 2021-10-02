import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Context } from '../context';

const Create = ({ navigation }) => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const { addBlog } = useContext(Context);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Enter Title: </Text>
			<TextInput style={styles.input} value={title} onChangeText={(newText) => setTitle(newText)} />
			<Text style={styles.text}>Enter Content: </Text>
			<TextInput style={styles.input} value={content} onChangeText={(newText) => setContent(newText)} />
			<View style={styles.btnWrapper}>
				<TouchableOpacity style={styles.button} onPress={() => addBlog(title, content, () => navigation.pop())}>
					<Text style={styles.btnText}>Save</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Create;

const styles = StyleSheet.create({
	container: { margin: 10, marginVertical: 50 },
	input: {
		backgroundColor: '#fff',
		padding: 10,
		fontSize: 18,
		marginVertical: 8,
		borderRadius: 5,
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	text: {
		fontSize: 24,
	},
	button: {
		padding: 10,
		backgroundColor: '#66f',
		width: '40%',
		textAlign: 'center',
		borderRadius: 5,
	},
	btnWrapper: {
		alignItems: 'center',
		marginTop: 20,
	},
	btnText: {
		textAlign: 'center',
		color: 'white',
		textTransform: 'uppercase',
		fontWeight: 'bold',
	},
});
