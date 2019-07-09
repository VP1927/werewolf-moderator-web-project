import React from 'react';

import '../style/Game.css'

import PlayerSt from './game/PlayerSt'
import CardSt from './game/CardSt'
import MainGame from './game/MainGame'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
//import component
// import Header from '../components/Header'

class Game extends React.Component{

	render (){
		return (
			<div className= 'container-fluid mainPage'>
			<Router>
				<Switch>
				<Redirect from="/setup" exact to="/setup/player" />
				<Route path ='/setup/player' component = {PlayerSt}/>
				<Route path ='/setup/card' component = {CardSt}/>
				<Route path ='/setup/game' component = {MainGame}/>
				</Switch>
			</Router>
			</div>
		)
	}
}

export default Game