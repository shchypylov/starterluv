import React, { Component } from 'react';
import Text from "../../presentational/Text";
import heart from '../../../images/heart.png';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Text text="Hello, world" />
				<img className="twitter" src={heart} />
			</div>
		);
	} 
}

export default App;
