import React from 'react';



class Main extends React.Component{
	render(){
		return(
			<div className = "mainPage container-fluid">
				<h1 className= 'pageName'> Rule </h1>
				<div className='container'>
					<h3 className='mainSec'>The Basic</h3>
					<h4 className='supSec'>Players</h4>
					<p className='context'>For a decent, game, you need at least 8 people. 9 is better. The more the merrier, although with more than about 17 the game can become too chaotic.<br/>
					Choose one person to be the moderator. You can choose this person however you like, but the moderator should always be a fairly experienced player. 
					If you are playing with many people who have never played before, it is best to let the most experienced player be the moderator 
					until the others get the hang of it.<br/>
					
					The moderator is not actually a player. 
					She (or he) oversees the game and coordinates the actions of the players. 
					When these rules say "players", they do not mean "players and moderator"; if you have 12 people, one of whom is the moderator, then you have 11 players, not 12.
					</p>
					<h4 className='supSec'>The basic deal</h4>
					<p className='context'>The game is composed of two teams: werewolves and townsfolk. <br/>
					The objective of the werewolves is to kill off all the villagers without themselves being killed. The objective of the townsfolk is to figure out who the werewolves are and kill them. One of the townsfolk is a seer, who has the ability to tell whether other players are werewolves or not (exactly how this works is described below).
					There is also the moderator who, as described above, is not part of either team, but serves as a sort of impartial referee.<br/>
					During the game, some players will be declared "dead". Dead players are not part of the game and are not allowed to converse, confer, or otherwise commiserate with living players. When the rules say "players", they mean living players only.
					<br/>The game proceeds in alternating phases of day and night, about which more anon.
					</p>

					<h4 className='supSec'>Setting up</h4>
					<p className='context'>The moderator should have several cards, one for each player. This is the basic setup: </p>
					<ul>
					<li>Werewolves: The number should be equal to 1/3 of the players’ number </li>
					<li>1 cupid</li>
					<li>1 bodyguard</li>
					<li>1 seer</li>
					<li>1 witch</li>
					<li>1 hunter</li>
					<li>the rest should be villagers</li>	
					</ul> 
					<p className='context'>The moderator gives each player one card. Each player should look at her (or his) card but be sure that no one else sees it.
					</p>

					<h4 className='supSec'>Night Phase</h4>
					<p className='context'>
					The game begins with a night phase. Everybody closes their eyes. It is crucial that all actions by players at night be performed silently, to avoid revealing the identities of the werewolves, seer, or other roles. It is a good idea for all players to make some "white noise" (tapping feet, "snoring", etc.) during the night so that tiny noises made by the necessary movements of the werewolves and seer will not be heard.
					<br/>All the roles, except villagers, will be called by the moderator according to the setup’s order. The called players open their eyes, perform their actions then go to sleep. It is the moderator’s duty to guide the players through each actions. 
					<br/>In addition, the moderator should be careful to use gender-neutral pronouns when speaking to the various roles. If, for instance, the moderator says, "The seer can now open his eyes and pick someone", all players will know that the seer is male.
					</p>

					<h4 className='supSec'>Day Phase</h4>
					<p className='context'>
					Once all the roles, the moderator says, "It is day, and so-and-so was killed in the night." (indicating the person who was chosen by the werewolves during the night phase). That person is now dead; she immediately gives her card to the moderator.
					<br/>As mentioned above, dead players are out of the game. When someone is declared dead by the moderator, they must refrain from hobnobbing with those still living -- this means no saying "I know who it is!" or anything like that.
					<br/>Now the villagers must vote on who to lynch. As soon as a majority of living players are voting for a single player, that player is declared dead and the next night phase begins. In general, the players will engage in heated discussion in an attempt to gather sufficient support for a particular lynch victim.
					<br/>Any living player may say anything she pleases. Lying is allowed in all forms and fashions. It is perfectly legal for a wolf to claim to be the seer, or for a player to intentionally misstate earlier events. The moderator should remain neutral and refrain from interfering in the discussion. It is appropriate, however, for the moderator to truthfully answer direct questions from living players about the number and type of players remaining in the game. (In other words, if someone asks, the moderator should tell them whether both wolves are still alive or one has been killed, or whether the seer was killed, etc.)
					<br/>It is, however, completely verboten for a living player to actually reveal her card.
					<br/>The basic strategy is as follows. The wolves are trying to pretend like they're not wolves, because if the villagers realize who the wolves are they will lynch them in short order. The villagers are trying to interpret the actions of other players and deduce who the wolves are. The seer is trying to throw suspicion on the wolves (if he knows who they are) and keep it off players she knows to be innocent -- but she must do this subtly, because if the werewolves figure out who the seer is, they will kill her during the night (since the seer is the biggest threat to the werewolves).
					<br/>Again, dead players are excluded from this hullabaloo. They can listen all they want, but may not say anything.
					<br/>A few things that always seem to come up: Yes, a majority of all living players, including the person being voted on; if there are 10 players alive, for example, there must be 6 votes on one player to lynch (5 is not enough). Yes, there must be a lynching every day; no namby-pamby we-don't-wanna-lynch-anybody nonsense in this village.
					<br/>Also, it is important that the moderator pay close attention to the voting. As soon as a majority of players is voting for a single victim, that victim is immediately dead and night begins. Any last words or pleas for mercy must be given before the majority rules; once the lynch takes place, the lynched person may not say anything more for the rest of the game.
					<br/>After a player is lynched, night phase begins immediately; no further discussion is permitted until the following day.
					<br/>Dead players are permitted to keep their eyes open at all times, and thus see everything that happens at night, but of course they must keep quiet about it so as not to influence the actions of the living players.
					</p>

					<h4 className='supSec'>Victory</h4>
					<p className='context'>
					If at any time the number of wolves is equal to or greater than the number of non-wolves, the wolves win. If there are no wolves left alive, the villagers win.
					</p>


				</div>
			</div>
		)
		
	}
}

class Rule extends React.Component{
	render (){
		return (
			<div>
				<Main />
			</div>
		)
	}
}

export default Rule