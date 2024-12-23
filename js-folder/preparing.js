function preparStyle(e) {
  e.style.display = "grid";
  e.style.padding = "10px";
  e.style.gap = "5px";
  e.style.height = "fit-content";
  e.style.backgroundColor = "#eee";
  e.style.borderRadius = "10px";
}

function totlesCounter(e, ordersTotle) {
  cartText = document.createTextNode(`Add To Cart (${ordersTotle.totle})`);
  e.style.color = "#f26314b8";
  e.style.fontWeight = "700";
  e.style.letterSpacing = "3px";
  e.appendChild(cartText);
}

function preparingImg(e, ordersTotle) {
  e.src = ordersTotle.img;
  e.style.width = "300px";
  e.style.height = "235px";
  e.style.margin = "0px auto";
}

function appearStyle(e) {
  e.appendChild(document.createTextNode("Your Added Items Will Appear Here"));
  e.style.margin = "0px auto";
  e.style.color = "#f26314b8";
  e.style.letterSpacing = "2px";
  e.style.fontWeight = "bold";
  e.style.opacity = "80%";
}

function prepar(pareant, ordersTotle) {
  preparStyle(pareant);
  let cart = document.createElement("p");
  totlesCounter(cart, ordersTotle);
  let img = document.createElement("img");
  preparingImg(img, ordersTotle);
  let appearing = document.createElement("p");
  appearStyle(appearing);
  pareant.appendChild(cart);
  pareant.appendChild(img);
  pareant.appendChild(appearing);
}
