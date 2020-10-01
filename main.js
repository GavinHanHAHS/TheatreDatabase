// Javascript

let items = loadStorage();

document.getElementById("submitButton").addEventListener("click", submitNewItem);

function submitNewItem() {
  let itemObj = {
    name: document.getElementById("nameInp").value,
    description: document.getElementById("descInp").value,
    bigCategory: document.getElementById("bigCat").value,
    smallCategory: document.getElementById("smallCat").value
  }

  items.push(itemObj);

  // add item to correct divs
  let pEl = document.createElement("p");
  pEl.innerHTML = `Name: ${itemObj.name} Description: ${itemObj.description}`
  document.getElementById("subcategoryc" + itemObj.bigCategory + itemObj.smallCategory).append(pEl);
  

  localStorage.setItem("items", JSON.stringify(items));
}

function loadStorage() {
  let itemsStr = localStorage.getItem("items");
  if(itemsStr) {
    let items = JSON.parse(itemsStr);
    // add every item to the correct divs and stuff.
    return items;
  } else {
    return [];
  }
}