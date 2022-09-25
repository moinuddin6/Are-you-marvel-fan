var readlineSync = require("readline-sync");

const boxen = require('boxen');

const chalk = require('chalk');

var score = 0;

var highScore = [{
  name: 'Moin',
  score: 10
},{
  name: "Faraz",
  score: 9
},{
  name: "Nobody",
  score: 6
}];

function welcome() {
  var userName = readlineSync.question(chalk.blue("May I have your name? "));
  console.log(chalk.grey("Welcome! ") + chalk.blue.underline.bold(userName) + "  to " +chalk.cyanBright("\Marvel Cinematic Quiz\" ") + "your current score is: " + chalk(score) + boxen("\n This game is give you to feel that how you know about MCU " + "\n Lets Know about rules & condition about this game" + "\n 01. There are total 10 question in this game." + "\n 02. Enter only option number(1,2,3,...ect.) as your answer." + "\n 03. You get a +1 for each right answer. " + "\n 04. You can exit the game anytime by entering \"e\". ", {margin: 1, padding: 1, borderColor: "blue", borderStyle: "single"})  );
  
};

var questionAnswer = [{
  question: "Q.01 How many Infinity Stones are there? \n\n A. Five \n B. Six \n C. Seven \n D. Eight \n \n",
  answer: "A"
}, {
  question: "Q.02 Where is Captain America from? \n\n A. Brooklyn \n B. New York \n C. Japan \n D. India \n \n",
  answer: "A"
}, {
  question: "Q.03 Who is Tony Stark’s father? \n\n A. Peter \n B. Steve  \n C. Howard Stark \n D. Moin \n \n",
  answer: "C"
}, {
  question: "Q.04 Captain America’s shield and Bucky's arm are made of what? \n\n A. Vibranium \n B. Iron \n C. Wood \n D. gold \n \n",
  answer: "A"
}, {
  question: "Q.05 Who was able to pick up Thor’s hammer in Endgame? \n\n A. Steve Rogers \n B. Tony \n C. Thor \n D. Thanos \n \n",
  answer: "A"
}, {
  question: "Q.06 How many Infinity Stones are there? \n\n A. Five \n B. Six \n C. Seven \n D. Eight \n \n",
  answer: "A"
}, {
  question: "Q.07 Who is Iron Man? \n\n A. Tony Stark \n B. captain America \n C. Thanos \n D. Bucky \n \n",
  answer: "A"
}, {
  question: "Q.08 Who is Winter Soldier? \n\n A. Bucky \n B. captain America \n C. Thanos \n D. Iron man \n \n",
  answer: "A"
}, {
   question: "Q.09 Who is kill iron man? \n\n A. Bucky \n B. captain America \n C. Thanos \n D. Iron man \n \n",
  answer: "C"
}, {
   question: "Q.10 Black Panther is set in which fictional country? ? \n\n A. Wakanda \n B. captain America \n C. Thanos \n D. Iron man \n \n",
  answer: "A"
}];

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("your answer is correct! ");
    score++
    
  }
  else {
    console.log("Your answer is wrong! ");
    score = score + 0;
  }
  console.log(boxen("current score: " + chalk.bgMagenta(score), {margin: 1, padding: 1, borderStyle: "single", borderColor: "cyan"}))
};

function quiz() {
  for (var i = 0; i<questionAnswer.length; i++) {
    var currentAnswer = questionAnswer[i];
    play(currentAnswer.question, currentAnswer.answer);
  }
  
}

function showScore() {
  console.log(boxen(chalk.blue("YAY! Your Total Score: ") + chalk.red(score), {margin: 1, padding:1, borderColor: "cyan", borderStyle: "single"}));
  console.log(boxen("Please Check out the high score naming person\n if you lie in this score,\n then ping me i will update there.", {margin: 1, padding: 1, borderStyle: "single", borderColor: "white"}));
  highScore.map(score => console.log(score.name, ":" , score.score));
}

welcome()
quiz()
showScore()
