import React from 'react';

import globalState from './GlobalState'

const MAX_PLAYER = 15
const MIN_PLAYER = 5

class PlayerSt extends React.Component{

	constructor(props){
		super(props);
		this.state= {
			value :'',
			playersList : {},
		}

	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    this.inputName = this.inputName.bind(this);
	    this.handleSubmitName = this.handleSubmitName.bind(this);
	}

	handleChange(event) {
		const num = (event.target.validity.valid) ? event.target.value : this.state.value;
    	this.setState({value: num});
  	}

    handleSubmit(event) {
      globalState.pNum = parseInt(this.state.value,10);
    	if (this.state.value > MAX_PLAYER) {
    		alert('Website is currently not support game with more than ' + MAX_PLAYER + ' players');
        globalState.pNum = 0;
    	}
      if (this.state.value < MIN_PLAYER) {
        alert('Werewolf is more fun when more than ' + (MIN_PLAYER-1) + ' players is playing');
        globalState.pNum = 0;
      }
    	this.setState({value : '',playersList:{}});
    	// alert('type of value ' + typeof globalState.pNum + ' is ' + globalState.pNum);
    	event.preventDefault();
  	}

  	inputName(event){	
  		let value = event.target.value;
  		let name = event.target.name;
		this.setState(prevState => {
		  let playersList = {...prevState.playersList}  // creating copy of state variable name
		  playersList[name] = value;                     // update the name property, assign a new value     
		  return { playersList };                                 // return new object name object
		})

    	event.preventDefault();
  	}

  	handleSubmitName(event){
  		globalState.players = [];
  		let list = this.state.playersList;
  		let i = 0;
  		var player;
  		for (player in list){
  			if (list[player] === '') continue;
  			let p = {
  				id : i,
  				name : list[player],
  				role : {},
  			}
  			globalState.players.push(p);
  			i += 1;
  		}

  		// globalState.players.sort(function(a,b){
  		// 	var keyA = globalState.players[a].name;
  		// 	var keyB = globalState.players[b].name;

  		// 	if (keyA < keyB) return -1;
  		// 	if (keyA > keyB) return 1;
  		// 	return 0;
  		// })

  		// alert(globalState.players[0].name);
  		event.preventDefault();
		// alert(globalState.players.length + ' ' + globalState.pNum);

		if (globalState.players.length !== globalState.pNum){
			alert('Empty name is not allow');
			globalState.players = [];
		}  		
		else{
			alert('go to setup card');
  			let path = '/setup/card';
  			this.props.history.push(path);
  		}
  	}

  	genForm(number){
  		let table = [];
  		// this.state.name = [];

  		for (let i = 0;i<number;i++){
  			// this.state.name.push([]);
  			table.push(
  				// <li key={i}>
  					<label key={i} className=' col-sm-3'>
	        			Player {i+1} name: 
	          			<input type="text" onChange={this.inputName} className='inputName' name={'player_' + (i+1)} key={i} />
	        		</label>
  				// </li>
  			)
  		}
  		if (globalState.pNum >0){
  			table.push(
  				<div className='container ' key={number+1}>
  					<div className='row' key={number+1}>
		  				<div className='col-sm-5' key={number+1}/>
		  				<input type="submit" value="Submit" key='input' className='summitBtn col-sm-2 btn btn-primary'/>
		  				<div className='col-sm-5' key={number+3}/>
		  			</div>
	  			</div>
  			);
  		}
  		return table;
  	}


	render (){
		return (
			<div className="container-fluid mainPage">
				<h1 className= 'pageName'> Card list </h1>
				<div className='container summit'>
		     		<form onSubmit={this.handleSubmit} className='number-summit'>
		        		<label>
		        			Number of player:
		          			<input type="text" pattern="[0-9]*" onChange={this.handleChange} value={this.state.value}  id='inputNumber'/>
		        		</label>
		        		<input type="submit" value="Submit" className='btn btn-primary'/>

		      		</form>

		      		<form onSubmit={this.handleSubmitName} className='name-summit'>
			      		<div className='row'>
				        	{this.genForm(globalState.pNum)}
		      			</div>
		      		</form>
				</div>
			</div>
		)
	}
}

export default PlayerSt