var names = ["Beyonce", "LLCoolJ", "McBirdyPants", "Chancey", "LLBlueJay","Schmidt", "Angus", "Snoopy", "Captain FeatherBottom", "Princess CooCoo Poof"];

var randomizer = names[Math.floor(Math.random()*names.length)];


var generateName = function(){
  console.log(randomizer);

};//end generateName function

module.exports=generateName;
