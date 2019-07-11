import React from 'react';

import globalState from './GlobalState'


class CardSt extends React.Component{
 	constructor(props) {
    	super(props);
    	this.state = {
      	cardList: [],
      	cards: {},
    	}
    	this.findCard = this.findCard.bind(this);
	}

  	componentDidMount() {
  		// if (globalState.pNum === 0){
  		// 	let path = '/setup/player';
  		// 	this.props.history.push(path);
  		// }

   		fetch('http://localhost:8080/cardlist')
			.then(response => response.json())
			.then(data => this.setState({ cardList: data }));

  	}

  	handleInput(e) {
    	let number = e.target.value;
    	let card = e.target.name;
    	this.setState(prevState => {
    	  	let cards = {...prevState.cards};
    	  	cards[card] = number;
      	return {cards};
    })

    e.preventDefault();
  	}

  	findCard(id){
  		return this.state.cardList.find((ele) => {
  			return ele.idCard === id;
  		});
  	}

  	findPlayer(id){
  		return globalState.players.find( (ele)=> {
  			return ele.id === id;
  		});
  	}

  	handleSummit(e){
		let pList = [];
  		let chosenList = this.state.cards;
	  	let chosen;
	  	let sum = 0;

  		for (chosen in chosenList){
  			sum += chosenList[chosen];
  		}

  		if ((globalState.pNum < sum) && (sum < globalState.pNum+2)){
  			for (var i=0;i<globalState.pNum;i++) pList.push(i);
;

	  		for (chosen in chosenList){
				for (let i=0;i<chosenList[chosen]; i++){
					var Pid = pList[Math.floor(Math.random()*pList.length)];
					
					for( var j = 0; j < pList.length; j++){ 
					   if ( pList[j] === Pid) {
					     pList.splice(j, 1); 
					   }
					}
					
					var player = this.findPlayer(Pid);

		  			player.role = this.state.cardList[chosen];

				}		
	  		}

  		}
  		else {
	  		alert('The number of card is not sufficient, number of card should vary between the number of players and that number including 2 to 3 extra cards');
  		}
	  		
    	e.preventDefault();
  	}

  	render() {
    	const cardList = this.state.cardList.map (card =>
      		<li key={card.idCard} className='col-sm-3 singleInput'>
      			<div className='image'>
	        		<img src={card.imageLink} alt={card.idCard}/>
      			</div>
		        <input type="text"  onChange = {(e) => this.handleInput(e)} name={card.idCard} className ="inputNum"/>
      		</li>
    	);

	    	if (cardList) 
      	return (
        	<div className="container-fluid mainPage">
				<h1 className= 'pageName'> Card list </h1>
				<div className='container'>
					<form onSubmit={(e) => this.handleSummit(e)}>
						<ul className='row cardList'>
	          			{cardList}
	          			</ul>
	          			<div className="container summit">
							<div className="row">
								<div className="col-sm-5"></div>
	          					<input type="submit" value="Submit" className="col-sm-2 btn btn-primary"/>
								<div className="col-sm-5"></div>
							</div>
						</div>
	          		</form>
          		</div>
        	</div>
      	)
  }
}

export default CardSt;