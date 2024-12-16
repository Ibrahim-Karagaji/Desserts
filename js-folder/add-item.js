function addTocart(e) {
  e.className = "adding";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-basket-shopping";
  e.appendChild(icon);
  let addP = document.createElement("p");
  addPText = document.createTextNode("add To Cart");
  addP.appendChild(addPText);
  e.appendChild(addP);
}

function descriptioning(e, container) {
  e.className = "description";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(container.title);
  h3.appendChild(h3Text);
  e.appendChild(h3);

  let span = document.createElement("span");
  let spanText = document.createTextNode(container.name);
  span.appendChild(spanText);
  e.appendChild(span);

  let descriptionP = document.createElement("p");
  let descriptionPText = document.createTextNode(
    "$" + container.price.toFixed(2)
  );
  descriptionP.appendChild(descriptionPText);
  e.appendChild(descriptionP);
}

function addItem(pareant, products) {
  for (let i = 0; i < products.length; i++) {
    let container = products[i];
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.src = container.img;
    card.appendChild(img);
    let add = document.createElement("div");
    addTocart(add);
    card.appendChild(add);
    let description = document.createElement("div");
    descriptioning(description, container);
    card.appendChild(description);
    pareant.appendChild(card);
  }
}
