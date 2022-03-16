var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
console.log(randomNumber2);

document.querySelector(".img").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 Winner !";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="Player 2 Winner !";
}
else{
  document.querySelector("h1").innerHTML="D R A W !!!";
}
