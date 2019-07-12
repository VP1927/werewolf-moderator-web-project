import React from 'react';

import globalState from './GlobalState'

// const globalState = {
//     players: [
//         { id: 0, name: 'Nhi', imageLink: '/images/Werewolf.jpg', role: 'Werewolf' },
//         { id: 1, name: 'Thoa', imageLink: '/images/Werewolf.jpg', role: 'Werewolf' },
//         { id: 2, name: 'Cuong', imageLink: '/images/Villager.jpg', role: 'Villager' },
//         { id: 3, name: 'Hanh', imageLink: '/images/Hunter.jpg', role: 'Hunter' }
//     ]
// };

class Effect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            effects: [],
        }

        // this.handleEffect = this.handleEffect.bind(this);
    }

    componentDidMount() {
        let link = 'http://localhost:8080/effect/' + this.props.idcard;
        fetch(link)
            .then(response => response.json())
            .then(data => this.setState({ effects: Array.from(data) }));

    }

    handleEffect(e, effect) {
    	if (this.props.phase === 'night'){
    		this.props.onHandleEffect(effect.name);

	        if (!effect.multitime) {
	            this.setState({
	                effects: this.state.effects.filter(function (eff) {
	                    return eff !== effect;
	                })
	            })
	        }
    	}

    }

    render() {
        const { effects } = this.state;

        if (!effects) return null;
        else
            return (
                <div>
                    <ul>
                        {effects.map(effect =>
                            <li key={effect.ideffect}>
                                <img className='icon' src={effect.iconLink} name={effect.name} onClick={(e) => this.handleEffect(e, effect)} alt = 'effect' />
                            </li>)}
                    </ul>
                </div>
            );
    }
}

class MainGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            players: globalState.players,
            phase: 'night',
            effectState: {},
            currentState: '',
            couple: [],
            // summary: {
            //     deaths: [],
            //     number: 0
            // }
        }


        this.handleEffect = this.handleEffect.bind(this);
        this.handleAffected = this.handleAffected.bind(this);
        this.handlePhase = this.handlePhase.bind(this);
        this.addIndirectDeath = this.addIndirectDeath.bind(this);
    }

    calculateWinning(){

        let count=0;
        let l = this.state.players.length;


        for (let i=0;i<this.state.players.length;i++){
            if (this.state.players[i].role.idCard === 0) count++;
        }

        if  (this.state.couple.length===2) {
            if ( ((this.state.couple[0].role.idCard === 0)||(this.state.couple[1].role.idCard === 0)) 
                && (this.state.couple[0].role !== this.state.couple[1].role) ){
                let couWin = true;
                for (let z=0;z<l;z++){
                    if ((this.state.players[z] !== this.state.couple[0])&&(this.state.players[z] !== this.state.couple[1])){
                        couWin = false;break;
                    }
                }
                if (couWin) return 'Couple'
            }
            // console.log(this.state.couple.length);
        }
        if (count === 0) return 'Human';
        if (Math.round(l/2) <= count) return 'Werewolf';
        return null;
    }

    componentDidMount() {

        fetch('http://localhost:8080/cardlist')
            .then(response => response.json())
            .then(data => this.setState({ cards: data }))
    }

    handleEffect(effect) {
    	if (this.state.phase ==='night'){
	        this.setState({ currentState: effect });
    	}
    }

    handleAffected(player) {

        if (this.state.phase === 'night') {
            const currentState = this.state.currentState;

            if (currentState === '') {
                alert('The effect has not been chosen');
            }
            else if (currentState === 'Connect') {
                if (this.state.couple.length < 2) {
                    this.setState(state => {
                        const couple = state.couple.concat(player);
                        return { couple };
                    });
                }
                if (this.state.couple.length === 1) {
                	this.setState({currentState: ''});
                }

            }

            else {
                this.setState(prevState => {
                    let effectState = { ...prevState.effectState };
                    effectState[this.state.currentState] = player;
                    return { effectState };
                })
            }
        }

        else {
            this.setState(prevState => {
                let effectState = { ...prevState.effectState };
                effectState['lynch'] = player;
                return { effectState };
            })
        }
    }

    addIndirectDeath(deaths, directDeath) {
        const couple = this.state.couple;
        const effectState = this.state.effectState;

        if (directDeath.role.role === 'Hunter') {
            if (effectState['Shoot'] === couple[0] || effectState['Shoot'] === couple[1]) {
                deaths.push(couple[0]);
                deaths.push(couple[1]);
            }
            deaths.push(effectState['Shoot']);

        }

        if (directDeath === couple[0] || directDeath === couple[1]) {
            if (directDeath.role.role === 'Hunter') {
                deaths.push(effectState['Shoot']);
            }
            deaths.push(couple[0]);
            deaths.push(couple[1]);
            this.setState({couple : []});
        }
    }

    handlePhase() {
        const effectState = this.state.effectState;
        let deaths = [];

        if (this.state.phase === 'night') {
            const bittenPlayer = effectState['Bite'];

            if (effectState['Protect'] !== bittenPlayer && effectState['Potion'] !== bittenPlayer) {
                deaths.push(bittenPlayer);
                this.addIndirectDeath(deaths, bittenPlayer);
            }

            if (('Poison' in effectState)) {
                deaths.push(effectState['Poison']);
                this.addIndirectDeath(deaths, effectState['Poison']);
            }

            deaths = [...new Set(deaths)];
            // alert(deaths.length);

            this.setState({
                phase: 'day',
                currentState: '',
                // effectState: {},
                // summary: {
                //     deaths: deaths,
                //     number: deaths.length
                // },
                players: this.state.players.filter(function (player) {
                    return deaths.indexOf(player) === -1
                })
            })
        }

        else {
            if (effectState['lynch'] != null){
                deaths.push(effectState['lynch']);
                this.addIndirectDeath(deaths, effectState['lynch']);

                deaths = [...new Set(deaths)];

                this.setState({
                    phase: 'night',
                    effectState: {},
                    currentState: '',
                    // summary: {
                    //     deaths: [...new Set(deaths)],
                    //     number: deaths.length
                    // },
                    players: this.state.players.filter(function (player) {
                        return deaths.indexOf(player) === -1
                    })
                });
            }
            else {
                deaths = [...new Set(deaths)];
                
                this.setState({
                    phase: 'night',
                    effectState: {},
                    currentState: '',
                });
            }
        }
    }

    render() {
        const cards = this.state.cards;
        // this.state.players.forEach((player)=>console.log(player.role))
        if (!cards) return null;
        let winner = this.calculateWinning();
        if (winner){
            return (
                <div className='container-fluid mainPage'>
                    <h1 className= 'pageName'> Main Game </h1>  
                    <div className='container GamePlay'>
                        <h2 className='phase'>{winner + ' has won'}</h2>
                    </div>
                </div>
            )
        }

        else return (
            <div className='container-fluid mainPage'>
                <h1 className= 'pageName'> Main Game </h1>            
                <div className='container GamePlay'>
                    <h2 className='phase'>{this.state.phase} phase</h2>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-sm-4 roleDiv'>
                                <ul>
                                    {cards.map(card =>
                                        <li key={card.idCard} className='roleName'>
                                            <h3>{card.role}</h3>
                                            <Effect idcard={card.idCard} onHandleEffect={this.handleEffect} phase={this.state.phase}/>
                                        </li>)}
                                </ul>
                            </div>
                            <div className='col-sm-8'>
                            	<div className='container'>
                                <ul className='row player'>
                                    {this.state.players.map(player =>
                                        <li key={player.id} onClick={() => this.handleAffected(player)} className='col-sm-3' >
    	                                    <h3 className='pName'>{player.name}</h3>
                                        	<div className='image'>
    	                                        <img src={player.role.imageLink} />
    	                                    </div>
                                        </li>)}</ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button onClick={this.handlePhase}>Next phase</button>
                    
                </div>
            </div>

        )
    }

}

export default MainGame;
