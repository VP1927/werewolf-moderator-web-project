// basic import
import React from 'react';
import ReactDOM from 'react-dom';

//import page
import Main from './view/Homepage';
import About from './view/About';
import CardList from './view/CardList';
import Rule from './view/Rule';
import Game from './view/Game';

//import routing
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const router = (
	<Router>
		<div>
			<Router path ='/' exact component = {Main}/>
			<Router path ='/about' component = {About}/>
			<Router path ='/cl' component = {CardList}/>
			<Router path ='/rule' component = {Rule}/>
			<Router path ='/game' exact component = {Game}/>
		</div>
	</Router>	
)

export default router