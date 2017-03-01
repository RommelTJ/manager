import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
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
		const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
		
		return (
			<Provider store={store} >
				<LoginForm />
			</Provider>
		);
	}
}

export default App;
