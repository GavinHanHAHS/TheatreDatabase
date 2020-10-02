// Javascript

let items = loadStorage();
let currentImg;

document.getElementById("submitButton").addEventListener("click", submitNewItem);
document.getElementById("pictureInp").addEventListener("change", (e) => doThingWithFile(e.target.files));

function submitNewItem() {
  let itemObj = {
    img: document.getElementById("output").src,
    name: document.getElementById("nameInp").value,
    description: document.getElementById("descInp").value,
    bigCategory: document.getElementById("bigCat").value,
    smallCategory: document.getElementById("smallCat").value
  }

  items.push(itemObj);

  // add item to correct divs
  let pEl = document.createElement("p");
  pEl.innerHTML = `<div class="itemCard"><img width="200px" src="${itemObj.img}"></img> <p>Name: ${itemObj.name} Description: ${itemObj.description}</p></div>`
  console.log("subcategoryc" + itemObj.bigCategory + itemObj.smallCategory);
  document.getElementById("subcategoryc" + itemObj.bigCategory + itemObj.smallCategory).append(pEl);
  
  //add to local storage
  //localStorage.setItem("items", JSON.stringify(items));
}

function doThingWithFile(fileList) {
  let file = null;

  for(let i = 0; i < fileList.length; i++) {
    if(fileList[i].type.match(/^image\//)) {
      file = fileList[i];
      break;
    }
  }
  if(file !== null) {
    document.getElementById("output").src = URL.createObjectURL(file); //creates a blob from image uploaded, and temporarily stores it.
  }
}

function loadStorage() {
  let itemsStr = localStorage.getItem("items");
  if(itemsStr) {
    let items = JSON.parse(itemsStr);
    // add every item to the correct divs and stuff.
    for(let i = 0; i < itemsStr.length; i++) {
      let pEl = document.createElement("p");
      pEl.innerHTML = `<div class="itemCard"><img width="200px" src="${items[i].img}"></img> <p>Name: ${items[i].name} Description: ${items[i].description}</p></div>`
      console.log("subcategoryc" + items[i].bigCategory + items[i].smallCategory);
      document.getElementById("subcategoryc" + items[i].bigCategory + items[i].smallCategory).append(pEl);
    }
    return items;
  } else {
    return [];
  }
}