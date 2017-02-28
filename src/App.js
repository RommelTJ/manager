import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
	componentWillMount() {
		const config = {
    		apiKey: 'AIzaSyA8J6UjrnuvZjkcuj7M7SAINB_BFUkFv-E',
    		authDomain: 'manager-dd564.firebaseapp.com',
    		databaseURL: 'https://manager-dd564.firebaseio.com',
    		storageBucket: 'manager-dd564.appspot.com',
    		messagingSenderId: '243930711501'
  		};
  		
  		firebase.initializeApp(config);
	}

	render() {
		return (
			<Provider store={createStore(reducers)} >
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
