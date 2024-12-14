function addTocart(e) {
  e.id = "adding";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-basket-shopping";
  e.appendChild(icon);
  let addP = document.createElement("p");
  e.appendChild(addP.appendChild(document.createTextNode("add To Cart")));
}

function descriptioning(e, container) {
  e.id = "description";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(container.title);
  h3.appendChild(h3Text);
  e.appendChild(h3);

  let span = document.createElement("span");
  let spanText = document.createTextNode(container.name);
  span.appendChild(spanText);
  e.appendChild(span);

  let descriptionP = document.createElement("p");
  let descriptionPText = document.createTextNode(container.price.toFixed(2));
  descriptionP.appendChild(descriptionPText);
  e.appendChild(descriptionP);
}
