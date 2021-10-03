import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Context } from '../context';
import ListItem from '../components/ListItem';

const Home = ({ navigation }) => {
	const { state } = useContext(Context);

	return (
		<View style={styles.container}>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.id.toString()}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity onPress={() => navigation.navigate('Blog', { id: item.id })}>
							<ListItem title={item.title} id={item.id} />
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 10,
	},
});

Home.navigationOptions = ({ navigation }) => {
	return {
		headerRight: () => (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<AntDesign style={{ paddingRight: 20 }} name='pluscircleo' size={30} color='black' />
			</TouchableOpacity>
		),
	};
};
