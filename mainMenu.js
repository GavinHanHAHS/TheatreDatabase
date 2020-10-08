"use strict";

// add event listeners for things you click
document.getElementById("content").addEventListener("click", handleClick);
document.getElementById("submitButt").addEventListener("click", changePage);
document.addEventListener("click", clickfunc);

function handleClick(event) { // do logic based on what you clicked
  if(event.target.nodeName === "BUTTON") { // if clicked button, change to costumes or makeup
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
  } else if(event.target.nodeName === "DIV") { // if clicked div, check if it's a category button and open/close
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
    } else if(event.target.classList.contains("subcategory")) {
      console.log(3);
      console.log("subcategory" + event.target.dataset.group);
      if(document.getElementById("subcategory" + event.target.dataset.group).style.display == "flex") {
        document.getElementById("subcategory" + event.target.dataset.group).style.display = "none";
      } else {
        document.getElementById("subcategory" + event.target.dataset.group).style.display = "flex";
      } 
    }
  }
  
}

function clickfunc(event) { //simple thing to check what you click on when you click
  console.log(event.target.nodeName);
}

function changePage() { // change pages
  if(document.getElementsByClassName("main")[0].style.display == "none") {
    document.getElementsByClassName("main")[0].style.display = "block";
    document.getElementsByClassName("submit")[0].style.display = "none";
    document.getElementById("submitButt").innerHTML = "Enter New Item";
  } else {
    document.getElementsByClassName("main")[0].style.display = "none";
    document.getElementsByClassName("submit")[0].style.display = "block";
    document.getElementById("submitButt").innerHTML = "Return to Main Page";
  }

}