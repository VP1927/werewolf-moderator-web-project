import React from 'react';

import '../style/Game.css'

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect
} from "react-router-dom";
//import component
// import Header from '../components/Header'

class Game extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pNum  : '',
			player: [],
			card  : [],
		}
	}l

	handleChange(evt){
		const num = (evt.target.validity.valid) ? evt.target.value : this.state.pNum;
		this.state.pNum = num;
	}

	render (){
		return (
			<Router>
				<Switch>
				<Redirect from="/setup" exact to="/setup/player" />
				<Route path ='/setup/player' component = {PlayerSt}/>
				<Route path ='/setup/card' component = {CardSt}/>
				<Route path ='/setup/game' component = {Werewolf}/>
				</Switch>
			</Router>
		)
	}
}

class PlayerSt extends React.Component{
	render (){
		return (
			<div>
				<h1>NAvi</h1>
			</div>
		)
	}
}

class CardSt extends React.Component{
	render (){
		return (
			<div>
				<h1>Dendi</h1>
			</div>
		)
	}
}

class Werewolf extends React.Component{
	render (){
		return (
			<div>
				<h1>Mr Sometime Win Mid</h1>
			</div>
		)
	}
}

export default Game