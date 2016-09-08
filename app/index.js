// Common index file for app

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import configureStore from './store/configureStore';
const store = configureStore();

import TabsRoot from './components/TabsRoot'
import { Provider } from 'react-redux'

export default class nowucsdsandiegoredux extends Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<Provider store={store}>
				<TabsRoot />
			</Provider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});