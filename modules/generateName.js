var names = ["Beyonce", "LLCoolJ", "McBirdyPants", "Chancey", "LLBlueJay","Schmidt", "Angus", "Snoopy", "Captain FeatherBottom", "Princess CooCoo Poof"];

var randomizerNames = names[Math.floor(Math.random()*names.length)]; // generates random index number


var generateName = function(){
<<<<<<< HEAD
  return randomizerNames;
=======
  return (randomizerNames);
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
};//end generateName function

generateName();

module.exports=generateName;
