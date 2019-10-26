//this is for index.html page, logic to select particular trainer that the user wants to select.

var selectedPlayer = location.hash;
selectedPlayer = selectedPlayer.replace('#', "");
// My background Pokemon Video When the page loads
function runvideoOnPokedex(){

}

let hlbv = document.getElementsByClassName('here_lies_background_video');

let hlpm = document.getElementById('here_lies_pokemon');
let indiv = document.getElementsByClassName('inner_div');
let secdiv = document.getElementsByClassName('second_div');

let bv = document.getElementById('back_video');

let mid_poke = document.getElementById('middle_poke');
let mid_poke_width = mid_poke.getBoundingClientRect().width;

let button_on_top = document.getElementsByClassName('button_on_top');
let newWidth = "" + Number(mid_poke_width)*.7 + "px";



function setSize(){
  let screenSize = window.innerWidth + "px";
  hlbv[0].style.width = screenSize;
  hlpm.style.width = screenSize;
  button_on_top[0].style.width = newWidth;
  button_on_top[0].style.width = newWidth;
}

setSize();
window.addEventListener("resize", function(){
  setSize();

})

bv.style.width = "100%";
indiv[0].style.width = "100%";
secdiv[0].style.width = "100%";





let hp;
let defense;
let attack;
let potential;
let result =[];
let name;

let carlosUrl = ["https://fizal.me/pokeapi/api/v2/id/6.json","https://fizal.me/pokeapi/api/v2/id/25.json", "https://fizal.me/pokeapi/api/v2/id/395.json"] ;
let carlosPokeImage = ["https://play.pokemonshowdown.com/sprites/xyani/charizard.gif","https://play.pokemonshowdown.com/sprites/xyani/pikachu.gif", "https://play.pokemonshowdown.com/sprites/xyani/empoleon.gif"];
let carlosTrainerImage = "carlos.png";

let mikiasUrl = ["https://fizal.me/pokeapi/api/v2/id/25.json", "https://fizal.me/pokeapi/api/v2/id/14.json", "https://fizal.me/pokeapi/api/v2/id/27.json"];
let mikiasPokeImage = ["https://play.pokemonshowdown.com/sprites/xyani/pikachu.gif", "https://play.pokemonshowdown.com/sprites/xyani/kakuna.gif", "https://play.pokemonshowdown.com/sprites/xyani/sandshrew.gif"];
let mikiasTrainerImage = "makias.png";//Trainer name is Mikias.

let neeyasUrl = ["https://fizal.me/pokeapi/api/v2/name/lapras.json","https://fizal.me/pokeapi/api/v2/name/bellossom.json", "https://fizal.me/pokeapi/api/v2/name/luxio.json"] ;
let neeyaPokeImage = ["https://play.pokemonshowdown.com/sprites/xyani/lapras.gif", "https://play.pokemonshowdown.com/sprites/xyani/bellossom.gif", "https://play.pokemonshowdown.com/sprites/xyani/luxio.gif"];
let neeyaTrainerImage = "neeya.png";


let tylersUrl = ["https://fizal.me/pokeapi/api/v2/name/mewtwo.json", "https://fizal.me/pokeapi/api/v2/name/rayquaza.json","https://fizal.me/pokeapi/api/v2/name/dialga.json"] ;
let tylerPokeImage = ["https://play.pokemonshowdown.com/sprites/xyani/mewtwo.gif", "https://play.pokemonshowdown.com/sprites/xyani/rayquaza.gif", "https://play.pokemonshowdown.com/sprites/xyani/dialga.gif"];
let tylerTrainerImage = "tyler.png";

let alfiesUrl = ["https://fizal.me/pokeapi/api/v2/name/azumarill.json","https://fizal.me/pokeapi/api/v2/name/spheal.json", "https://fizal.me/pokeapi/api/v2/name/leafeon.json"] ;
let alfiesPokeImage = ["https://play.pokemonshowdown.com/sprites/xyani/azumarill.gif","https://play.pokemonshowdown.com/sprites/xyani/spheal.gif", "https://play.pokemonshowdown.com/sprites/xyani/leafeon.gif"];
let alfiesTrainerImage = "howrang.png";

// let pokeball = document.getElementById('preview_image');
let pokeballSketch = document.getElementById('poke_image');

function fetchPokemonData(thaturl) {
      axios.get(thaturl)
      .then(function (response) {
         hp = response.data.stats[5].base_stat;  //Pokemon's Health Status
         attack = response.data.stats[4].base_stat; //Pokemon's Attack Status
         defense = response.data.stats[3].base_stat; //Pokemon's Defense Status
         potential = response.data.abilities; //Pokemon's Ability
         name = response.data.forms[0].name;
         let selectedPokemon = new Pokemon(name, hp, attack, defense, potential);
         selectedPokemon.display(sketchRand);
         trainer.add(selectedPokemon); // add new Pokemon, if want to add more Pokemon, In this everyone has 3 Pokemon.
         trainer.all();

         // console.log("fpd:\tname:\t"+name);
         // console.log("fpd:\tdefense:\t"+defense);
         // console.log("fpd:\tattack:\t"+attack);
         // console.log("fpd:\tpotential:\t",potential);

      })
      .catch(function (error) {
          console.log("error");
      });
  }

//  "fizal.me/pokeapi/api/v2/name/"+name+".json/";

  /** Method to display Pokemon Data **/
  let trainerImage = document.getElementById('left_image');
  let ability_lists = ["This pokemon is so fast that you never see it coming, it just comes and that's that, and its oponent are left wondering what just happened.", "The most Abilities any species or form have are three: two normal Abilities and one Hidden Ability. In most wild Pokémon encounters, it'll be non-Hidden Abilities.", "There are three ways for Pokémon to change Abilities in a permanent manner. One way is if the Pokémon has different forms with different Abilities."];
  let sketchfab = ["https://sketchfab.com/models/09326261ead84002af136fdff56f50e7/embed?autostart=1", "https://sketchfab.com/models/28b3d9b0ee5b48ca941e953cefe9bcbf/embed?autostart=1&amp;preload=1","https://sketchfab.com/models/e64604ea410b4648bbb4cd5d47b1bddc/embed?autostart=1&amp;preload=1"];
  let selectedPokemonName = document.getElementById('pokemon_name');
  let ability_description = document.getElementById('ability_summary');
  let ability_button_one = document.getElementById('ability_one');
  let ability_button_two = document.getElementById('ability_two');
  let ability_button_three = document.getElementById('ability_three');


//This Class is to Modify Pokemon Object when its method(s) is also called
class Pokemon{
  //Pokemon has certain attributes
  //only the last parameter is String data type, the rest are integer

  constructor(name, hpStat, attackStat, defenseStat, abilitiesStat){
    this.name = name;
    this.hpStat = hpStat;
    this.attackStat = attackStat;
    this.defenseStat = defenseStat;
    this.abilitiesStat = abilitiesStat;
  }
  /** Creating the function to display data about the pokemon**/
  display(sketchUrl) {
      let displayHP = document.getElementById('health_icon');
      let displayAttack = document.getElementById('attack_icon');
      let displayDefense = document.getElementById('role_icon');
      let displayAbility = document.getElementById('pokemon_ability');

      //console.log("display:\tpotential:\t"+potential.showValue);
      for(var i = 0; i<potential.length; i++){
        result[i] = potential[i].ability.name;
        console.log('inside loop', result[i]);
      }
        /** Animation 'hover' Starts here
        From here im creating a animation where when user hover over and click on a option, info about that shows up**/
      ability_button_one.addEventListener('click', function(){
        console.log('when clicked', result[0]);
        setTimeout(()=>{
        displayAbility.style.animation = "scaleAnimation 2s 2";
      }, 500);

        if(typeof result[0]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
          ability_description.innerHTML = "Mystery";
        }else{
        displayAbility.innerHTML = result[0];
        let abilities_index = Math.floor(Math.random()*2)+1;
        ability_description.innerHTML = ability_lists[abilities_index];
      }
      });
      ability_button_two.addEventListener('click', function(){
        if(typeof result[1]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
        }else{
        displayAbility.innerHTML = result[1];
            ability_description.innerHTML = abilitiesInside[1];
      }
      });
      ability_button_three.addEventListener('click', function(){
        if(typeof result[2]==='undefined'){
          displayAbility.innerHTML = "Anonymous";
        }else{
        displayAbility.innerHTML = result[2];
          ability_description.innerHTML = abilitiesInside[2];
      }
      });

      //give value on first line, and assign keyframe/animation on the second line
      selectedPokemonName.innerHTML = this.name;
      // selectedPokemonName.style.animation="heartbeat .5s linear";

      displayAttack.innerHTML = this.attackStat;
      // displayAttack.style.animation="heartbeat .5s linear";

      displayDefense.innerHTML = this.defenseStat;
      // displayDefense.style.animation="heartbeat .5s linear";
      displayHP.innerHTML = this.hpStat;
      // displayHP.style.animation="heartbeat .5s linear";

      //assigning url to the Pokemon Image
      if(selectedPlayer==='neeya'){
     pokeballSketch.src = neeyaPokeImage[rand];
     }else if(selectedPlayer==='mikias'){
     pokeballSketch.src = mikiasPokeImage[rand];
     }else if(selectedPlayer==='carlos'){
     pokeballSketch.src = carlosPokeImage[rand];
     }else if(selectedPlayer==='tyler'){
     pokeballSketch.src = tylerPokeImage[rand];
    }else if(selectedPlayer==='alfie'){
     pokeballSketch.src = alfiesPokeImage[rand];
     }else{
       console.log(selectedPlayer, '\terror');
     }
     // }
     //
     //  console.log(this.name);
     //  console.log(this.hpStat);
     //  console.log(this.defense);
     //  console.log(this.attackStat);
     //  console.log(sketchUrl+":\t"+mikiasPokeImage[sketchUrl]);
    }
}


let sketchRand = 0;
let rand = 0;
//This Class is to Modify Trainer Object when its method(s) is also called
class Trainer{
  // multiple pokemon, user picks one, array of Pokemon to choose from
  //where parameter name holds the name of the trainer
  constructor(trainerName){
    // this.pokeObject = new Pokemon(hp, attack, defense, abilities);
    this.pokemon = ["one", "two", "three"];

  }

  //Method named 'all' that return the array of Pokemon, plus you can add more pokemon if you want
    add(pokeObject){
      this.pokemon.push(pokeObject);
    }
    //this method returns the value from add() method
    all(){
      return this.pokemon;
    }

    // Method named 'get' that Pokemon object housing information for the pokemon it found
    get(){
    // let rand = Math.floor(Math.random()*url.length);
    rand++;
    if(rand>2){
      rand = 0;
    }
    sketchRand = rand;
    // console.log("get:\t",rand);

    if(selectedPlayer==='neeya'){
   fetchPokemonData(neeyasUrl[rand]);
   }else if(selectedPlayer==='mikias'){
  fetchPokemonData(mikiasUrl[rand]);
   }else if(selectedPlayer==='carlos'){
   fetchPokemonData(carlosUrl[rand]);
   }else if(selectedPlayer==='tyler'){
   fetchPokemonData(tylersUrl[rand]);
 }else if(selectedPlayer==='alfie'){
   fetchPokemonData(alfiesUrl[rand]);
   }else{
     console.log('Error fetching '+ selectedPlayer + "'s Data");
   }
    }
}

//utilizing trainer class to display various trainer and its Pokemon
let trainer = new Trainer('mikias');

let pokemonTrainerName = document.getElementById('player_name');

//This function showTrainerData() assigns who the Trainer is and his/her name, trainerName is the parameter where the player name goes
//this function also assign trainer his her image as well
function showTrainerData(trainerName){
  // let nameThatTrainer = sendTrainerName('mikias');
  // selectedPlayer dont forget
  pokemonTrainerName.innerHTML = trainerName;
}
//calling the function to add more pokemon data to your trainer class
// var selectedPlayer = 'ray'
window.load = showTrainerData(selectedPlayer);

//function to move to next Pokemon and its abilities
function gotoNextPokemon(){
  trainer.get();// here the method will fetch and assign the pokemon data to its designated element
  function runThis(){
  // selectedPokemon.display(sketchRand);
  }
  setTimeout(runThis, 500);
}
// When clicked on this button new pokemon shows up

if(selectedPlayer==="neeya"){
    trainerImage.src = neeyaTrainerImage;
}else if(selectedPlayer==="mikias"){
  trainerImage.src = mikiasTrainerImage;
}else if(selectedPlayer==="carlos"){
  trainerImage.src = carlosTrainerImage;
  trainerImage.style.width = "80%";
  trainerImage.style.height = "70%";
}else if(selectedPlayer==="tyler"){
  trainerImage.src = tylerTrainerImage;
  trainerImage.style.width = "70%";
  trainerImage.style.height = "70%";
}else if(selectedPlayer==="alfie"){
  trainerImage.src = alfiesTrainerImage;
  trainerImage.style.transform = "rotate(-20deg)";
}

let myNextButton = document.querySelector('.button_on_top');
myNextButton.addEventListener('click', gotoNextPokemon);
