
/*
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums
*/
 //@param {number} number1
 //@param {number} number2
 //@return {number} product
const multiplication = (number1,number2) => {
 let num=number1
    for(var i = 1; i <number2; i++){
       num +=number1; // increments itself
       }
    return num;
}
const answer1 = multiplication(2,5)
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
let newConsenants = [];
  let newvaowels = [];
vowelOrConsonant = () => {
  let userInputOfWords = prompt('Please enter one word. ');
  const nputString = userInputOfWords.toLowerCase();
  const vowels = ["a", "e", "i", "o", "u"];
  
  for (var i = 0; i < nputString.length; i++) {
    if (vowels.indexOf(nputString[i]) !== -1) { 
      newvaowels.push(nputString[i]);
  // console.log(newvaowels);
    } else {
      newConsenants.push(nputString[i]);
    }
  }
  const userChoose =prompt("How do you want to order your output ? If you need Vowel first enter Vowel,if you need consonant enter consenant ?")
  let orderChoose=[]
if(userChoose ==="vowel"){
orderChoose=[...newvaowels,...newConsenants]
  return `Depend up on your choose here is the arry having vowels first then consonant   ${orderChoose}`
  
}else{
  orderChoose=[...newConsenants,...newvaowels]
  return `Depend up on your choose here is the arry having consonant first then vowels     ${orderChoose}`

}

  }
  const answer2=vowelOrConsonant();
const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
  const name=prompt("Enter your player  name");
let counter=0;
guessTheNumber=(min, max)=> {
  return Math.floor(Math.random() * (max - min) + min);;
}

let answer3 = guessTheNumber(10,50)
  while(counter <3){
    let gussedNum=prompt("gusse a number");
counter +=1;
if(gussedNum==answer3){
  alert(`Oh waw ${name}you got it,the number is${rund}`)
  break;
}if(counter ==3){
alert( `Oops ! ${name} you reach max limet of tryles ! the random number is ${answer3}`);
break;
}
  }
const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"


sort = () => {

    var library = [
     {
         title:  'The Road Ahead',
         author: 'Bill Gates',
         libraryID: 1254
     },
     {
         title: 'Walter Isaacson',
         author: 'Steve Jobs',
         libraryID: 4264
     },
     {
         title: 'Mockingjay: The Final Book of The Hunger Games',
         author: 'Suzanne Collins',
         libraryID: 3245
     }];
  
  
  const selectedValue=prompt("How do you want to sort your array of object using title,author or  libraryID")
  const sortedData=[];
  for(let i=0;i<library.length;i++){
    if(selectedValue ==="title"){
  sortedData.push(library[i]["title"])
  sortedData.sort((a,b) => b.length - a.length)
  //console.log(sortedData);
    }
    else if(selectedValue ==="author"){
      sortedData.push(library[i]["author"])
      sortedData.sort((a,b) => b.length - a.length)
     // console.log(sortedData);
    
  }else if(selectedValue ==="libraryID"){
    sortedData.push(library[i]["libraryID"])
    sortedData.sort((a,b) => b.length - a.length)
   // console.log(sortedData);
  
  }else{
    return `please select one from option`
  
  }
    
  }
    return  `Here is your sort Data depend up on your selection ${sortedData}`;
  }

const answer4 = sort();

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
