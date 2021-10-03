import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const BlogForm = ({ onSubmit, blog }) => {
	const [blogTitle, setBlogTitle] = useState(blog.title);
	const [blogContent, setBlogContent] = useState(blog.content);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>Enter Title: </Text>
			<TextInput style={styles.input} value={blogTitle} onChangeText={(newText) => setBlogTitle(newText)} />
			<Text style={styles.text}>Enter Content: </Text>
			<TextInput style={styles.input} value={blogContent} onChangeText={(newText) => setBlogContent(newText)} />
			<View style={styles.btnWrapper}>
				<TouchableOpacity style={styles.button} onPress={() => onSubmit(blogTitle, blogContent)}>
					<Text style={styles.btnText}>Save</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

BlogForm.defaultProps = {
	blog: { title: '', content: '' },
};

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

export default BlogForm;
