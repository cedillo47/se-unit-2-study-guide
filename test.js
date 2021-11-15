//takes in a sting and doubles every character that is not a vowel, diget,punctoation or whitespace

/*
1.first create a function that take in one peramiter 
2. decalre an empty let varable, here we will store new string 
3. write a for loop to loop through every character
4. create a statment to check if charachter is a vowel or diget or punctioatio or white space. 
5. if the charater is one of these do nothing 
6. if it isnt, double that character 
7. return that let varaibe that we declared ealryer to hold new value

*/

function doubleConsonants(string){
  let double = "";

for(let charachter of string){
  if (parseInt(charachter, 10)){
    double = double + charachter
  }
  else if(charachter === " "){
    double = double + charachter
  }
  else if(charachter === "!" || charachter === "-"){
    double = double + charachter
  }
  else if(charachter === 'a' || charachter === 'e' || charachter === 'i' || charachter === 'o' || charachter === 'u' || false){
     double = double + charachter
  }
  else if (charachter === 'A' || charachter === 'E' || charachter === 'I' || charachter === 'O' || charachter === 'U' || false){
    double = double + charachter
  }
  else{
    double = double + charachter + charachter 
  }
 } return double
}

// console.log(doubleConsonants(" "))

function reverse(string){
  let reversed = '';
  for(let i = string.length - 1 ; i >= 0; i--){
    reversed = reversed + string[i]
  }
  return reversed
}

function isLeapYear(year){
  if(year % 4 === 0 && year % 100 !== 0 ){
   return  true
  } 
  else if (year % 400 === 0){
    return true
  }
  else{
   return false

  }
}

function wordToDiget(string){
 let eachWord = string.split(/([_\W])/);
 let newS = "";
 for (let word of eachWord){
   if(word === 'zero'){
     newS = newS + "0"
   } else if (word === " "){
     newS = newS + " "
   } else if (word === 'one'){
     newS = newS + "1"
   } else if(word === 'two'){
     newS = newS + "2"
   } else if(word === 'three'){
     newS = newS + "3"
   }else if(word === 'four'){
     newS = newS + "4"
   }else if(word === 'five'){
     newS = newS + "5"
   }else if(word === 'six'){
     newS = newS + "6"
   }else if(word === 'seven'){
     newS = newS + "7"
   }else if(word === 'eight'){
     newS = newS + "8"
   }else if(word === 'nine'){
     newS = newS + "9"
   }
   else {
     newS = newS + word 
   }
  }
   return newS
}

function characteGenearator(player){
 function randdie(){
 let dice1 = Math.floor(Math.random() * 6) + 1
 let dice2 = Math.floor(Math.random() * 6) + 1
 let dice3 = Math.floor(Math.random() * 6) + 1
 let dice4 = Math.floor(Math.random() * 6) + 1
 // we have our 4 dice. //
  let numsAdded = 0
 if(dice1 < dice2 < dice3 < dice4){
   numsAdded = numsAdded + dice2 + dice3 + dice4
 }
 else if(dice2 < dice3 < dice4 < dice1){
  numsAdded = numsAdded + dice1 + dice3 + dice4
 }
 else if(dice3 < dice1 < dice2 < dice4){
  numsAdded = numsAdded + dice1 + dice2 + dice4
 }
 else if(dice4 < dice1 < dice2 < dice3){
 numsAdded = numsAdded + dice1 + dice2 + dice3
 }
 return numsAdded;
};
randdie();
 let character = {
 'name' : player,
 'strength': randdie(),
 'dexterity' : randdie(),
 'constitution' : randdie(),
 'intelligence' : randdie(),
 'wisdom' : randdie(),
 'charisma' : randdie(),
 'hitpoints' : 0
 };
 // character['hitpoints'] =  10 + (2/(character['constitution'] - 10)
 const construction =  character['constitution'] - 10;
 const hit = construction / 2
 const total = Math.floor(10 + hit)
 character['hitpoints'] = total;
 return character
}


console.log(characteGenearator("gandolf"))
// console.log(isLeapYear(1996))
// console.log(isLeapYear(1900))
// console.log(isLeapYear(2000))


