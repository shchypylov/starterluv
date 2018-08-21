import React, { Component } from 'react';
import Text from "../../presentational/Text";
import heart from '../../../images/heart.png';

class App extends Component {
	render() {
		return (
			<div className="app">
				<img style={{width : "100%"}} className="twitter" src={heart} />
			</div>
		);
	} 
}

export default App;
