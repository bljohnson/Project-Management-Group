var skillSet = ["Front End", "Back End", "Logic"];

var randomizerSkills = skillSet[Math.floor(Math.random()*skillSet.length)]; // generates random index number

var generateSkillSet = function(){
<<<<<<< HEAD
  return randomizerSkills;
=======
  return (randomizerSkills);
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
};

generateSkillSet();

module.exports=generateSkillSet;
