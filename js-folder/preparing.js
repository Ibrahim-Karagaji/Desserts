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
  e.className = "totle";
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

function preparStyleAfterAddToCart(e) {
  if (e.children[1] instanceof HTMLImageElement) {
    e.removeChild(e.children[1]);
    e.removeChild(e.children[1]);
  }
}

function preparBoxesStyle(e) {
  e.style.display = "flex";
  e.style.justifyContent = "space-between";
  e.style.alignItems = "center";
  e.style.flexDirection = "row-reverse";
  e.style.color = "black";
  e.style.marginTop = "3px";
  e.style.marginBottom = "3px";
  e.style.padding = "3px";
  e.style.backgroundColor = "8080804d";
  e.style.borderRadius = "10px";
}

function preparBoxes(e, name, price) {
  let boxesPareant = document.createElement("div");
  boxesPareant.style.borderRadius;
  preparBoxesStyle(boxesPareant);
  let box = document.createElement("div");
  box.style.display = "grid";
  box.style.gap = "3px";
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(name);
  h3.appendChild(h3Text);
  let p = document.createElement("p");
  let pText = document.createTextNode(price);
  p.appendChild(pText);
  box.appendChild(h3);
  box.appendChild(p);
  let cancle = document.createElement("i");
  cancle.className = "fa-solid fa-xmark cancle";
  boxesPareant.appendChild(cancle);
  boxesPareant.appendChild(box);
  e.appendChild(boxesPareant);
}
