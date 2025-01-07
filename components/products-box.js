function box(e, p, com) {
  e.style.justifyContent = "normal";

  if (e.children[1] instanceof HTMLImageElement) {
    e.removeChild(e.children[1]);
    e.removeChild(e.children[1]);
  }

  if (e.children[1] == undefined) {
    const boxesParent = document.createElement("div");
    boxesParent.className = "boxesParent";
    boxesParent.style.display = "grid";
    boxesParent.style.gap = "5px";

    const productBox = document.createElement("div");
    productBox.className = "box";
    productBox.style.display = "flex";
    productBox.style.justifyContent = "space-between";
    productBox.style.alignItems = "center";

    const content = document.createElement("div");
    content.className = "content";

    const productName = document.createElement("p");
    productName.innerHTML = `${p.name}`;

    const productConter = document.createElement("p");
    productConter.innerHTML = `x1`;

    content.appendChild(productName);
    content.appendChild(productConter);

    productBox.appendChild(content);

    const cancle = document.createElement("img");
    cancle.className = "cancle";
    cancle.src = "images-Folder/icon-remove-item.svg";

    productBox.appendChild(cancle);

    boxesParent.appendChild(productBox);

    e.appendChild(boxesParent);
    e.appendChild(com);

    const totle = com.children[0];

    increaseTotle(totle.children[1], p.price);

    com.children[2].onclick = function () {
      finishOrders(boxesParent, product, com);
      document.body.style.opacity = "80%";
    };

    return productBox;
  } else {
    const productBox = document.createElement("div");
    productBox.className = "box";
    productBox.style.display = "flex";
    productBox.style.justifyContent = "space-between";
    productBox.style.alignItems = "center";

    const content = document.createElement("div");
    content.className = "content";

    const productName = document.createElement("p");
    productName.innerHTML = `${p.name}`;

    const productConter = document.createElement("p");
    productConter.innerHTML = `x1`;

    content.appendChild(productName);
    content.appendChild(productConter);

    productBox.appendChild(content);

    const cancle = document.createElement("img");
    cancle.className = "cancle";
    cancle.src = "images-Folder/icon-remove-item.svg";

    productBox.appendChild(cancle);

    e.children[1].appendChild(productBox);

    const epmty = e.children[2];
    const totle = epmty.children[0];

    increaseTotle(totle.children[1], p.price);

    return productBox;
  }
}
