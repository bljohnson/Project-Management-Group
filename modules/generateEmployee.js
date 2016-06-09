var genName = require('./generateName');
var generateEmployee = function(){
var outputText = "Person Name: " + genName();
return (outputText);
};

module.exports=generateEmployee;
