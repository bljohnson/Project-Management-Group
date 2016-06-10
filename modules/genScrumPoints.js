var scrumPoints = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var randomizerPoints = scrumPoints[Math.floor(Math.random()*scrumPoints.length)]; // generates random index number

var generateScrumPoints = function(){
<<<<<<< HEAD
  return randomizerPoints;
=======
  return (randomizerPoints);
>>>>>>> a06c29a2142f7164fddcd7c56e934873ee1a36fa
};

generateScrumPoints();

module.exports=generateScrumPoints;
