let  min = 1,
      max = 10,
      winningNum = getRandomNum(min,max),
      guessesLeft= 3;

// UI ELEMENTS
const game = document.querySelector('#game'),
      minNum= document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessInput =document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message= document.querySelector('.message');

//Assign min and max
minNum.textContent= min;
maxNum.textContent=max;
game.addEventListener('mousedown',function(e){
   if(e.target.className === 'play-again'){
      window.location.reload();

   }
})

// listen for a click
 guessBtn.addEventListener('click',function(){
   
 let guess = parseInt(guessInput.value);

 //validate
 if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max} ${color}`);
 }
 if(guess === winningNum){
   gameOver(true, `${winningNum} is correct , YOU WIN`,)
   //  //disable input 
   //  guessInput.disabled = true;
   //  //change border color
   //  guessInput.style.borderColor ='green';
   // //let use know they won
   // setMessage(`${winningNum} is correct , YOU WIN`, 'green');
 }else{
    //wrong number
    guessesLeft-= 1;
    if(guessesLeft===0){
       // game is over
       gameOver(false, `Game over ,you lost . The correct number was ${winningNum}`,)
   //     guessInput.disabled = true;
   //  //change border color
   //  guessInput.style.borderColor ='red';
   // //let use know they won
   // setMessage(` Game is over, you lost.The winning number is ${winningNum}`, 'red');

    }else{
       //game continues-answer is wrong

       //change border color
       guessInput.style.borderColor ='red';
      //clear input
      guessInput.value ='';
       //tell user it is a wrong number
       setMessage(`${guess} is not correct,${winningNum} guesses left`, 'red');


    }

 }
 


 });
 //game over
 function gameOver(won,msge){
    let color;
    won === true? color='green':color='red';
    //disable input 
    guessInput.disabled = true;
    //change border color
    guessInput.style.borderColor ='color';
    //set text color
    message.style.color=color;
   //let use know they won
   setMessage(msge);
   // play again
   guessBtn.value = 'Play Again'
   guessBtn.className += 'play-again'


 }
 // get winning number
 function getRandomNum(min, max){
    return(Math.floor(Math.random()*(max-min+1)+min))

 }

 //set message

 function setMessage(msg,color){
    message.textContent = msg;
    message.style.color=  color;
 }




   