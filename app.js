/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, gamePlaying, previousRolln winnigScore;
init();
// dice = Math.floor((Math.random() * 6)  + 1);
//
// document.querySelector('#current-' + activePlayer).textContent = dice;
// // document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//
//
// var x = document.querySelector('#score-1').textContent;

document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying){
    // 1. Roll dice.
    var dice = Math.floor((Math.random() * 6)  + 1);

    // 2. Display result.
    var diceDOM = document.querySelector('.dice-0');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    dice = Math.floor((Math.random() * 6)  + 1);

    diceDOM = document.querySelector('.dice-1');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';

    // 3. Update roud score if the rolled number was NOT a 1.
    if (dice !== 1) {
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else if((previousRoll && dice) === 6){
      document.querySelector('#current-' + activePlayer).textContent = 0;
      nextPlayer();
    }else {
      nextPlayer();
    }
  }
  });

document.querySelector('.btn-hold').addEventListener('click',function(){
  if (gamePlaying){
  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winningScore){
        document.querySelector('#name-' + activePlayer).textContent = "Winner!";
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
      }else {
        nextPlayer();
      }
    }
    });

    function nextPlayer() {
      activePlayer = (activePlayer === 0)? 1:0;
      roundScore = 0;

      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';

      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      document.querySelector('.dice-0').style.display = 'none';
      document.querySelector('.dice-1').style.display = 'none';
    }

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;
  previousRoll = null;
  winningScore =() ? : ;

  document.querySelector('.dice-0').style.display = 'none';
  document.querySelector('.dice-1').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";
  document.querySelector('.player-0-panel').classList.add('active');

}
