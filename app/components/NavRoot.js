import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import {
	BackAndroid,
	NavigationExperimental
} from 'react-native'

const {
	CardStack: NavigationCardStack,
	Header: NavigationHeader,
} = NavigationExperimental

class NavRoot extends Component {
	constructor (props) {
		super(props)
		this._renderScene = this._renderScene.bind(this)
		this._handleBackAction = this._handleBackAction.bind(this)
	}

	componentDidMount () {
		BackAndroid.addEventListener('hardwareBackPress', this._handleBackAction)
	}

	componentWillUnmount () {
		BackAndroid.removeEventListener('hardwareBackPress', this._handleBackAction)
	}

	_renderScene (props) {
		const { route } = props.scene
		if (route.key === 'home') {
			return <Home
			_handleNavigate={this._handleNavigate.bind(this)} />
		}
		if (route.key === 'about') {
			return <About _goBack={this._handleBackAction.bind(this)} />
		}
	}
	
	_handleBackAction () {
		if (this.props.navigation.index === 0) {
			return false
		}
		this.props.popRoute()
		return true
	}

	_handleNavigate (action) {
		switch (action && action.type) {
			case 'push':
				this.props.pushRoute(action.route)
				return true
		case 'back':
		case 'pop':
			return this._handleBackAction()
		default:
			return false
		}
	}
	render () {
		return (
			<NavigationCardStack
				navigationState={this.props.navigation}
				renderHeader={(props) => <NavigationHeader onNavigateBack={this._handleBackAction} {...props}/>}
				onNavigate={this._handleNavigate.bind(this)}
				onNavigateBack={this._handleBackAction}
				renderScene={this._renderScene} />
		)
	}
}

export default NavRoot