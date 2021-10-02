import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from './src/context';
import Blog from './src/screens/Blog';
import Create from './src/screens/Create';
import Edit from './src/screens/Edit';
import Home from './src/screens/Home';

const navigator = createStackNavigator(
	{
		Home: Home,
		Blog: Blog,
		Create: Create,
		Edit: Edit,
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: {
			title: 'Home',
		},
	}
);

const App = createAppContainer(navigator);

export default () => (
	<Provider>
		<App />
	</Provider>
);
