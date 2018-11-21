
//My background Pokemon Video When the page loads
// window.onload = function myFunction() {
//   var vid = document.getElementById("back_video");
//   vid.autoplay = true;
//   vid.load;
//   // vid.controls = true;
// };
//


//  "fizal.me/pokeapi/api/v2/name/"+name+".json/";
  let hp =3;
  let defense =5;
  let attack = 3;
  let abilities = "";
  let name = "spheal";
  let url = "http://fizal.me/pokeapi/api/v2/name/spheal.json";

  //This Method fetches data from Pokemon-api using the "url" provided by utilizing Axio.
  function fetchPokemonData() {
      axios.get(url)
      .then(function (response) {
         hp = response.data.stats[5].base_stat;  //Pokemon's Health Status
         defense = response.data.stats[3].base_stat; //Pokemon's Defense Status
         attack = response.data.stats[4].base_stat; //Pokemon's Attack Status
         potential = response.data.abilities; //Pokemon's Ability

         let result = [];
         for(var i = 0; i<potential.length; i++){
           result[i] = potential[i].ability.name;
           console.log(i+"\t"+result[i]);

         }

         console.log(hp);
         console.log(defense);
         console.log(attack);
      });
      // .catch(function (error) {
      //     console.log("error");
      // });
  }


console.log(fetchPokemonData());

//This Class is to Modify Pokemon Object when its method(s) is also called
class Pokemon{
  //Pokemon has certain attributes
  //only the last parameter is String data type, the rest are integer

  constructor(hpStat, attackStat, defenseStat, abilities){
  this.hpStat = hpStat;
  this.attackStat = attackStat;
  this.defenseStat = defenseStat;
  this.abilities = abilities;
  }
}


//This Class is to Modify Trainer Object when its method(s) is also called
class Trainer{

  // multiple pokemon, user picks one, array of Pokemon to choose from
  constructor(){
    this.pokemon = [];
    // this.pokeObject = new Pokemon(hp, attack, defense, abilities);
    this.pokemon = ["one", "two", "three"];

  }

    //Method named 'all' that return the array of Pokemon
    all(){

      let pokemon = [];
      pokemon.push(pokeObject);
      return pokemon;
    }

    // Method named 'get' that Pokemon object housing information for the pokemon it found
    get(name){

    }

}

function displayDataOnScreen(){
  let userInput = prompt('Type in aPokemon');
  let whichPokemon = Trainer.get(userInput);
  let thatPokemon = Trainer.all();
}
