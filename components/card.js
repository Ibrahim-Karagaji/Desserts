function createCard(product, parent) {
  for (let i = 0; i < product.length; i++) {
    counter = product[i];

    const card = document.createElement("div");
    card.className = "card card" + counter.id;

    card.innerHTML = `
    <img src="${counter.img}" />
    <div class="add-to-cart ${counter.id}">
        <i class="fa-solid fa-basket-shopping"></i>
        <p>Add To Cart</p>
    </div>
    <div class="description">
        <h3>${counter.title}</h3>
        <p>${counter.name}</p>
        <p style="font-weight: bold;">$${Number(counter.price).toFixed(2)}</p>
    </div>
    `;
    parent.appendChild(card);

    card.children[1].onclick = function () {
      add(card.children[1]);
    };
  }
}

function oldStyleOfAdd(e) {
  e.innerHTML = "";
  e.innerHTML = `
    <i class="fa-solid fa-basket-shopping"></i>
    <p>Add To Cart</p>
`;
}