// Javascript
"use strict";

document.getElementById("content").addEventListener("click", handleClick);
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
  } else if(event.target.nodeName === "DIV") {
    if(event.target.classList.contains("category")) { //check and open/close first level of categories
      if(document.getElementById("subcategory" + event.target.dataset.group).style.display == "block") {
        document.getElementById("subcategory" + event.target.dataset.group).style.display = "none";
      } else {
        document.getElementById("subcategory" + event.target.dataset.group).style.display = "block";
      }
    } 
  } else if(event.target.nodeName === "P") { //check and open/close first level of categories but if user clicks paragraph el
    if(event.target.parentElement.classList.contains("category")) {
      if(document.getElementById("subcategory" + event.target.parentElement.dataset.group).style.display == "block") {
        document.getElementById("subcategory" + event.target.parentElement.dataset.group).style.display = "none";
      } else {
        document.getElementById("subcategory" + event.target.parentElement.dataset.group).style.display = "block";
      }
    }
  }
  
}

function clickfunc(event) {
  console.log(event.target.nodeName);
}