import React, { Component } from 'react'
import { TabBarIOS } from 'react-native'

import Recipes from './Recipes'
import Samples from './Samples'
import Home from '../containers/navRootContainer'

import ScrollableTabView from 'react-native-scrollable-tab-view';

const tabs = [
{ component: Home, key: 'home', title: 'Main' },
{ component: Recipes, key: 'recipes', title: 'Recipes' },
{ component: Samples, key: 'samples', title: 'Samples' }];

export default class Tabs extends Component {
	render () {
		const tabMap = tabs.map((tab, i) => {
			return (<tab.component tabLabel={tab.title} key={i}/>);
		});

		return (
			<ScrollableTabView
				tabBarPosition="bottom"
			>
				{tabMap}
			</ScrollableTabView>
		);
	}
}