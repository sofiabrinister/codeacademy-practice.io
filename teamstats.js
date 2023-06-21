const team = {
  _players: 
    [{firstName: 'Sarah', lastName: 'Flower', age: 19},
    {firstName: 'Laurie', lastName: 'Jones', age: 19},
    {firstName: 'Jo', lastName: 'Klem', age: 18}],

  _games: 
  [ {opponent: 'Red Sox', teamPoints: 70, opponentPoints: 50},
  {opponent: 'Jets', teamPoints: 20, opponentPoints: 30},
  {opponent: 'Giants', teamPoints: 40, opponentPoints: 60}],

  get players(){
    return this._players
  },

  get games() {
    return this._games
  },

addPlayer(newFirstName, newLastName, newAge){
  let player = {
    firstName: newFirstName,
    lastName: newLastName,
    age: newAge
  };
  this.players.push(player);
  },

addGame(newOpponent, newTeamPoints, newOpponentPoints){
  let game = {
    opponent: newOpponent,
    teamPoints: newTeamPoints,
    opponentPoints: newOpponentPoints
  };
  this.games.push(game);
}  
  
}
team.addPlayer('Bugs', 'Bunny', 76)
console.log(team.players)

team.addGame('Titans', 100, 98)
console.log(team.games)
