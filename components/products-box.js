function box(e, product, com) {
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

    const box = document.createElement("div");
    box.className = "box";
    box.style.display = "flex";
    box.style.justifyContent = "space-between";
    box.style.alignItems = "center";

    const content = document.createElement("div");
    content.className = "content";

    const productName = document.createElement("p");
    productName.innerHTML = `${product.name}`;

    const productConter = document.createElement("p");
    productConter.innerHTML = `x1`;

    content.appendChild(productName);
    content.appendChild(productConter);

    box.appendChild(content);

    const cancle = document.createElement("img");
    cancle.className = "cancle";
    cancle.src = "images-Folder/icon-remove-item.svg";

    box.appendChild(cancle);

    boxesParent.appendChild(box);

    e.appendChild(boxesParent);
    e.appendChild(com);
  } else {
    const box = document.createElement("div");
    box.className = "box";
    box.style.display = "flex";
    box.style.justifyContent = "space-between";
    box.style.alignItems = "center";

    const content = document.createElement("div");
    content.className = "content";

    const productName = document.createElement("p");
    productName.innerHTML = `${product.name}`;

    const productConter = document.createElement("p");
    productConter.innerHTML = `x1`;

    content.appendChild(productName);
    content.appendChild(productConter);

    box.appendChild(content);

    const cancle = document.createElement("img");
    cancle.className = "cancle";
    cancle.src = "images-Folder/icon-remove-item.svg";

    box.appendChild(cancle);

    e.children[1].appendChild(box);
  }
}
