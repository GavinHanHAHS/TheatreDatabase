// Javascript
"use strict";

document.getElementById("buttonBar").addEventListener("click", handleClick);
document.addEventListener("click", clickfunc);

function handleClick(event) {
  if(event.target.nodeName === "BUTTON") {
    if(event.target.id === "makeupButt") {
      document.getElementById("makeupDiv").style.display = "block";
      document.getElementById("makeupButt").style.backgroundColor = "darkSlateBlue";
      document.getElementById("costumeDiv").style.display = "none";
      document.getElementById("costumeButt").style.backgroundColor = "darkBlue";
    } else if(event.target.id === "costumeButt") {
      document.getElementById("makeupDiv").style.display = "none";
      document.getElementById("makeupButt").style.backgroundColor = "darkBlue";
      document.getElementById("costumeDiv").style.display = "block";
      document.getElementById("costumeButt").style.backgroundColor = "darkSlateBlue";
    }
  }
}

function clickfunc(event) {
  console.log(event.target.nodeName);
}