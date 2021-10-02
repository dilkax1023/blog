import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Context } from '../context';

const ListItem = ({ title, id }) => {
	const { deleteBlog } = useContext(Context);

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				{title} - {id}
			</Text>
			<TouchableOpacity onPress={() => deleteBlog(id)}>
				<Ionicons name='ios-trash-outline' size={30} color='black' />
			</TouchableOpacity>
		</View>
	);
};

export default ListItem;

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 10,
		borderBottomWidth: 1,
		paddingBottom: 5,
		alignItems: 'center',
	},
	text: {
		fontSize: 16,
	},
});
