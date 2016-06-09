var genName = require('./generateName');
var genSkillSet = require('./generateSkillSet');
var genScrumPoints = require('./genScrumPoints');
var generateEmployee = function(){
var outputText = "Person Name: " + genName() + "Skill Set: " + genSkillSet() + "Scrum Points: " + genScrumPoints();
console.log(outputText);
};

module.exports=generateEmployee;
