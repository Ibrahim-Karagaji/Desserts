function box(e, productName) {
  e.style.justifyContent = "normal";

  if (e.children[1] instanceof HTMLImageElement) {
    e.removeChild(e.children[1]);
    e.removeChild(e.children[1]);
  }

  const boxCard = document.createElement("div");
  boxCard.className = "box";

  const content = document.createElement("div");
  content.className = "content";

  const named = document.createElement("p");
  named.innerHTML = `${productName}`;

  const OrdersTotle = document.createElement("p");
  OrdersTotle.innerHTML = `x1`;

  content.appendChild(named);
  content.appendChild(OrdersTotle);

  boxCard.appendChild(content);

  const cancle = document.createElement("img");
  cancle.src = "images-Folder/icon-remove-item.svg";
  cancle.style.width = "13px";
  cancle.style.height = "13px";
  cancle.style.border = "solid 1px #eee";
  cancle.style.padding = "2px";
  cancle.style.borderRadius = "50%";
  cancle.style.backgroundColor = "rgb(0, 140, 140)";
  cancle.style.outline = "rgb(0, 140, 140) solid 2px";

  boxCard.appendChild(cancle);

  e.appendChild(boxCard);

  return boxCard;
}
