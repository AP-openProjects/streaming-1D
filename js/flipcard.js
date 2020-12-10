const netflixBtn = document.querySelector("#netflix__btn");
const netflixBtnBack = document.querySelector("#netflix__btn__back");
const netflixCard = document.querySelector("#netflix");
const huluBtn = document.querySelector("#hulu__btn");
const huluBtnBack = document.querySelector("#hulu__btn__back");
const huluCard = document.querySelector("#hulu");
const youtubeBtn = document.querySelector("#youtube__btn");
const youtubeBtnBack = document.querySelector("#youtube__btn__back");
const youtubeCard = document.querySelector("#youtube");
const disneyBtn = document.querySelector("#disney__btn");
const disneyBtnBack = document.querySelector("#disney__btn__back");
const disneyCard = document.querySelector("#disney");
const appleBtn = document.querySelector("#apple__btn");
const appleBtnBack = document.querySelector("#apple__btn__back");
const appleCard = document.querySelector("#apple");
const vuduBtn = document.querySelector("#vudu__btn");
const vuduBtnBack = document.querySelector("#vudu__btn__back");
const vuduCard = document.querySelector("#vudu");
const hboBtn = document.querySelector("#hbo__btn");
const hboBtnBack = document.querySelector("#hbo__btn__back");
const hboCard = document.querySelector("#hbo");
const crackleBtn = document.querySelector("#crackle__btn");
const crackleBtnBack = document.querySelector("#crackle__btn__back");
const crackleCard = document.querySelector("#crackle");
const cbsBtn = document.querySelector("#cbs__btn");
const cbsBtnBack = document.querySelector("#cbs__btn__back");
const cbsCard = document.querySelector("#cbs");
const slingBtn = document.querySelector("#sling__btn");
const slingBtnBack = document.querySelector("#sling__btn__back")
const slingCard = document.querySelector("#sling");
const primeBtn = document.querySelector("#prime__btn");
const primeBtnBack = document.querySelector("#prime__btn__back");
const primeCard = document.querySelector("#prime");
const fuboBtn = document.querySelector("#fubo__btn");
const fuboBtnBack = document.querySelector("#fubo__btn__back");
const fuboCard = document.querySelector("#fubo");


// flip card functions
netflixBtn.addEventListener("click", function(){
  netflixCard.classList.add("flip");
});  

huluBtn.addEventListener("click", function(){
  huluCard.classList.add("flip");
});  

youtubeBtn.addEventListener("click", function(){
  youtubeCard.classList.add("flip");
});  

disneyBtn.addEventListener("click", function(){
  disneyCard.classList.add("flip");
});  

appleBtn.addEventListener("click", function(){
  appleCard.classList.add("flip");
});  

vuduBtn.addEventListener("click", function(){
  vuduCard.classList.add("flip");
});  

hboBtn.addEventListener("click", function(){
  hboCard.classList.add("flip");
});  

crackleBtn.addEventListener("click", function(){
  crackleCard.classList.add("flip");
});  

cbsBtn.addEventListener("click", function(){
  cbsCard.classList.add("flip");
});  

slingBtn.addEventListener("click", function(){
  slingCard.classList.add("flip");
});  

primeBtn.addEventListener("click", function(){
  primeCard.classList.add("flip");
});  

fuboBtn.addEventListener("click", function(){
  fuboCard.classList.add("flip");
});  

// flip back card functions

netflixBtnBack.addEventListener("click", function(){
  netflixCard.classList.remove("flip");
});  

huluBtnBack.addEventListener("click", function(){
  huluCard.classList.remove("flip");
});  

youtubeBtnBack.addEventListener("click", function(){
  youtubeCard.classList.remove("flip");
});  

disneyBtnBack.addEventListener("click", function(){
  disneyCard.classList.remove("flip");
});  

appleBtnBack.addEventListener("click", function(){
  appleCard.classList.remove("flip");
});  

vuduBtnBack.addEventListener("click", function(){
  vuduCard.classList.remove("flip");
});  

hboBtnBack.addEventListener("click", function(){
  hboCard.classList.remove("flip");
});  

crackleBtnBack.addEventListener("click", function(){
  crackleCard.classList.remove("flip");
});  

cbsBtnBack.addEventListener("click", function(){
  cbsCard.classList.remove("flip");
});  

slingBtnBack.addEventListener("click", function(){
  slingCard.classList.remove("flip");
});  

primeBtnBack.addEventListener("click", function(){
  primeCard.classList.remove("flip");
});  

fuboBtnBack.addEventListener("click", function(){
  fuboCard.classList.remove("flip");
});  