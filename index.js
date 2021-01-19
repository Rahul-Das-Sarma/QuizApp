var chalk = require('chalk');
var readlineSync = require('readline-sync');


var userName = readlineSync.question(chalk.yellow('Welcome to the Naruto Quiz App! What is your name? '))

var HighestScore = {name: "Rahul" , score: "140"}

var score = 0;



console.log(chalk.green("Hi " + userName + "!"))
console.log(chalk.red("let's start the quiz! Remember that for each right answer you will be awarded 10 points and for the wrong answer -5"))

readlineSync.question(chalk.blue('Press Enter to start when You are Ready!!'))


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("You are right!"))
    score += 10
  }else {
    console.log(chalk.red("You are Wrong!"));
    score -= 5;
  }
  console.log(chalk.bold("Your Score is.. "+ score))
  console.log("......................")
}

var Allquestions = [{
  question: `What is the Hair color of Naruto ?
             a. Black
             b. yellow
             c. red 
             Ans. ` ,
  answer: "b"
},
{
  question: `Which Hokage sealed the nine-tailed fox inside Naruto?
             a. first Hokage
             b. second Hokage
             c. Fourth Hokage
             Ans. ` ,
  answer: "c"
},
{
  question: `Which character can only use taijutsu ?
             a. rocklee
             b. Gara
             c. Sasuki Uchiha
             Ans. ` ,
  answer: "a"
},
{
  question: ` Sasuke's goal is gain enough power to kill whom?
             a. Naruto
             b. Kakashi
             c. Itachi Uchiha 
             Ans. ` ,
  answer: "c"
},
{
  question: `What does 'Chidori' mean?
             a. one thousand birds
             b. five thousand swords
             c. ten thousand stones
             Ans. ` ,
  answer: "a"
},
{
  question: `Which of the legendary sannin becomes the fifth Hokage ?
             a. Tsunade
             b. Jiraya
             c. Orochimaru 
             Ans. ` ,
  answer: "a"
},
{
  question: `D-rank missions are usually given to what level of shinobi ?
             a. Chunin
             b. Genin
             c. Hokage 
             Ans. ` ,
  answer: "b"
},
{
  question: `Which of the following ninjas is a kunoichi?
             a. Orochimaru
             b. Naruto Uzumaki
             c. Sakura Haruno
             Ans. ` ,
  answer: "c"
},
{
  question: `What is the relationship between Naruto and Iruka?
             a. Their parents were killed when they were younger
             b. Iruka was Naruto's teacher
             c. All of these
             Ans. ` ,
  answer: "c"
},
{
  question: `What is the forbidden technique used by Rock Lee that he used on Dosu and Gaara?
             a. Lotus of Destruction
             b. Fiery Lotus
             c. Primary Lotus
             Ans. ` ,
  answer: "a"
},
{
  question: `Who tricked Naruto into stealing a sacred scroll?
             a. Mizuki
             b. Sasuke
             c. Zabuza 
             Ans. ` ,
  answer: "a"
},
{
  question: `What is Naruto's last name?
             a. Shippuden
             b. Uzumaki
             c. He doesnt have one 
             Ans. ` ,
  answer: "b"
},
{
  question: `Which famed clan was completely massacred?
             a. Uchiha
             b. Uzumaki
             c. Hyugaa 
             Ans. ` ,
  answer: "a"
},
{
  question: `Which of these is NOT one of Naruto's specialties?
             a. Shadow clone jutsu
             b. Chidori
             c. Rasengan 
             Ans. ` ,
  answer: "b"
},
{
  question: `Whom does Sakura love?
             a. Naruto
             b. Gaara
             c. Sasuke 
             Ans. ` ,
  answer: "c"
},]

for (var i = 0; i < Allquestions.length ; i++){
  var currentQuestion = Allquestions[i]
  play(currentQuestion.question, 
  currentQuestion.answer)
}

if(HighestScore.score < score){
  console.log(chalk.red("Congrats! You have beaten the Highest Scorer.... send me the screen shot so that I may update your Name"))
}
console.log(chalk.green("Your HighestScore is... " + score))