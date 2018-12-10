
var whichPlayer1 = document.getElementById('player_carlos');
var whichPlayer2 = document.getElementById('player_mikias');
var whichPlayer3 = document.getElementById('player_neeya');
var whichPlayer4 = document.getElementById('player_tyler');
var whichPlayer5 = document.getElementById('player_alfie');

// //sendTrainerName is a function for index.html when user clicks on the player, it will send players name for the pokedex.html and result will be displayed
whichPlayer1.addEventListener('click', function(){
  sendTrainerName('carlos');
});
whichPlayer2.addEventListener('click', function(){
  sendTrainerName('mikias');
});
whichPlayer3.addEventListener('click', function(){
  sendTrainerName('neeya');
});
whichPlayer4.addEventListener('click', function(){
  sendTrainerName('tyler');
});
whichPlayer5.addEventListener('click', function(){
  sendTrainerName('alfie');
});

function sendTrainerName(trainerName){
    // take me to the pokedex.html page
    // selectedPlayer = trainerName;
    location = "pokedex.html#"+trainerName;
}
