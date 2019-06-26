// basic import
import React from 'react';
import ReactDOM from 'react-dom';

//import font

//import style
import 'bootstrap/dist/css/bootstrap.min.css';
import './template.css'
//only index need to inport style and font


import Header from './components/Header';


import Main from './view/Homepage';
import About from './view/About';
import CardList from './view/CardList';
import Rule from './view/Rule';
import Game from './view/Game';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


class App extends React.Component{
	render(){
		return (
			<div className='body'>
				<Router>
				<Header />

					<Route path ='/' exact component = {Main}/>
					<Route path ='/about' component = {About}/>
					<Route path ='/cl' component = {CardList}/>
					<Route path ='/rule' component = {Rule}/>
					<Route path ='/game' exact component = {Game}/>
				</Router>
			</div>
		)
	}
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
