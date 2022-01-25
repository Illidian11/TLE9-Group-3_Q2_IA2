let nav = document.querySelector(".nav");
let mouseCursor = document.querySelector(".cursor");
let settings = document.getElementById("settings");
let body = document.body;
let h1 = document.getElementById("h1");
let bgm = document.querySelector(".img");
let ham = document.getElementById("hamburger");
let content = document.getElementById("content");
let lol = document.getElementById("trai");




function myFunction() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

function myCursor() {
  mouseCursor.style.display = "block";
  body.style.cursor = "none";
  
}
function myCursorOff() {
  mouseCursor.style.display = "none";
  body.style.cursor = "auto";
}

function myClose() {
  settings.style.display = "none";
}
function myOpen() {
  settings.style.display = "block";
}

function myTheme() {
  h1.style.webkitTextStroke = "1px orangered";
  h1.style.textShadow = "0 0 10px orangered, 0 0 40px orangered, 0 0 10px orangered";
  bgm.src="9370CA6B-67B0-4ADF-BD48-0F3A2F033FCC.jpeg";
  nav.style.background = "rgb(255, 65, 0, .5)";
  nav.style.border = "1px solid black";
  ham.style.background = "orangered";
  content.style.background = "#333";
}
function myThemeOff() {
  h1.style.webkitTextStroke = "1px crimson";
  h1.style.textShadow = "0 0 10px maroon, 0 0 40px maroon, 0 0 10px maroon";
  bgm.src="378883A5-6926-4FEB-A447-035D46E3EDF6.jpeg";
  nav.style.background = "rgb(185, 15, 10, .5)";
  nav.style.border = "1px solid crimson";
  ham.style.background = "crimson";
  content.style.background = "#222";
}

function myTrMor() {
 if (lol.style.display === "block") {
   lol.style.display = "none";
 } else {
   lol.style.display = "block";
 }
}