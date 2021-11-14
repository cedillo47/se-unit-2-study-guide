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




console.log(isLeapYear(1997))
console.log(isLeapYear(1996))
console.log(isLeapYear(1900))
console.log(isLeapYear(2000))


