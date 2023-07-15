// abcdefghijklmnopqrstuvwxyz
// ABCDEFGHIJKLMNOPQRSTUVWXYZ

const input = document.querySelector("#password");
const lenght  =12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|}{[]/-=";
const allChars = upperCase + lowerCase + number + symbol;

console.log(allChars.length);

function createPassword(){
    let password = "";
  
    while(lenght > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    input.value = password;
}

function copyPassword(){
    input.select();
    document.execCommand("copy");
}