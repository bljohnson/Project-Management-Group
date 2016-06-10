var genName = require('./generateName');
var genSkillSet = require('./generateSkillSet');
var genScrumPoints = require('./genScrumPoints');
var generateEmployee = function(){
<<<<<<< HEAD
  var outputText = "Person Name: " + genName() + "\nSkill Set: " + genSkillSet() + "\nScrum Points: " + genScrumPoints();
  return outputText;
=======
var outputText = "Person Name: " + genName() + "\nSkill Set: " + genSkillSet() + "\nScrum Points: " + genScrumPoints();
  return (outputText);
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
};
generateEmployee();
module.exports=generateEmployee;
