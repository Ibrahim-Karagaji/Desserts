const imgsReference = [
  "images-Folder/image-waffle-desktop.jpg",
  "images-Folder/image-creme-brulee-desktop.jpg",
  "images-Folder/image-macaron-desktop.jpg",
  "images-Folder/image-tiramisu-desktop.jpg",
  "images-Folder/image-baklava-desktop.jpg",
  "images-Folder/image-meringue-desktop.jpg",
  "images-Folder/image-cake-desktop.jpg",
  "images-Folder/image-brownie-desktop.jpg",
  "images-Folder/image-panna-cotta-desktop.jpg",
];

function addTocart(e) {
  e.id = "adding";
  let icon = document.createElement("i");
  icon.className = "fa-solid fa-basket-shopping";
  e.appendChild(icon);
  let addP = document.createElement("p");
  e.appendChild(addP.appendChild(document.createTextNode("add To Cart")));
}
