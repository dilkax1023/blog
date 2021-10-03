import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context';

const Blog = ({ navigation }) => {
	const { state } = useContext(Context);

	const id = navigation.getParam('id');

	const blog = state.find((item) => item.id === id);

	return (
		<View>
			<Text>{blog?.title}</Text>
			<Text>{blog?.content}</Text>
		</View>
	);
};

export default Blog;

const styles = StyleSheet.create({});

Blog.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => {
			return (
				<TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
					<AntDesign style={{ paddingRight: 20 }} name='edit' size={34} color='black' />
				</TouchableOpacity>
			);
		},
	};
};
