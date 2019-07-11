import React from 'react';

import globalState from './GlobalState'

const globalState = {
    players: [
        { id: 0, name: 'Nhi', imageLink: '/images/Werewolf.jpg', role: 'Werewolf' },
        { id: 1, name: 'Thoa', imageLink: '/images/Werewolf.jpg', role: 'Werewolf' },
        { id: 2, name: 'Cuong', imageLink: '/images/Villager.jpg', role: 'Villager' },
        { id: 3, name: 'Hanh', imageLink: '/images/Hunter.jpg', role: 'Hunter' }
    ]
};

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
        this.props.onHandleEffect(effect.name);

        if (!effect.multitime) {
            this.setState({
                effects: this.state.effects.filter(function (eff) {
                    return eff !== effect;
                })
            })
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
                                <img className='icon' src={effect.iconLink} name={effect.name} onClick={(e) => this.handleEffect(e, effect)} />
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
            summary: {
                deaths: [],
                number: 0
            }
        }

        this.handleEffect = this.handleEffect.bind(this);
        this.handleAffected = this.handleAffected.bind(this);
        this.handlePhase = this.handlePhase.bind(this);
        this.addIndirectDeath = this.addIndirectDeath.bind(this);
    }

    componentDidMount() {

        fetch('http://localhost:8080/cardlist')
            .then(response => response.json())
            .then(data => this.setState({ cards: data }))
    }

    handleEffect(effect) {
        this.setState({ currentState: effect });
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

        if (directDeath.role === 'Hunter') {
            if (effectState['Shoot'] === couple[0] || effectState['Shoot'] === couple[1]) {
                deaths.push(couple[0]);
                deaths.push(couple[1]);
            }
            deaths.push(effectState['Shoot']);

        }

        if (directDeath === couple[0] || directDeath === couple[1]) {
            if (directDeath.role === 'Hunter') {
                deaths.push(effectState['Shoot']);
            }
            deaths.push(couple[0]);
            deaths.push(couple[1]);
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
            alert(deaths.length);

            this.setState({
                phase: 'day',
                currentState: '',
                summary: {
                    deaths: deaths,
                    number: deaths.length
                },
                players: this.state.players.filter(function (player) {
                    return deaths.indexOf(player) === -1
                })
            })
        }

        else {
            deaths.push(effectState['lynch']);
            this.addIndirectDeath(deaths, effectState['lynch']);

            this.setState({
                phase: 'night',
                summary: {
                    deaths: [...new Set(deaths)],
                    number: this.state.summary.deaths.length
                },
                players: this.state.players.filter(function (player) {
                    return deaths.indexOf(player) === -1
                })
            });
        }
    }

    render() {
        const cards = this.state.cards;

        if (!cards) return null;

        else return (
            <div className='container-fluid GamePlay'>
                <h1>{this.state.phase}</h1>
                <div className='container'>
                    <div className='row'>
                        <div className='col-sm-4'>
                            <ul>
                                {cards.map(card =>
                                    <li key={card.idCard}>
                                        <h3>{card.role}</h3>
                                        <Effect idcard={card.idCard} onHandleEffect={this.handleEffect} />
                                    </li>)}
                            </ul>
                        </div>
                        <div className='col-sm-8'>
                            <ul>
                                {this.state.players.map(player =>
                                    <li key={player.id} onClick={() => this.handleAffected(player)}>
                                        <h3>{player.name}</h3>
                                        <img className='image' src={player.imageLink} />
                                    </li>)}</ul>
                        </div>
                    </div>
                </div>
                <button onClick={this.handlePhase}>Next phase</button>
                <p>{this.state.summary.number}</p>
            </div>

        )
    }

}

export default MainGame;
