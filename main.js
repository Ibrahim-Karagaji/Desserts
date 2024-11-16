let waffie = document.getElementById("waffie");

let waffieplas = document.createElement("span");
waffieplas.appendChild(document.createTextNode("+"));
waffieplas.style.padding = "5px";

let waffieNumberOfOrders = document.createElement("span");
waffieNumberOfOrders.appendChild(document.createTextNode(1));

let waffieminus = document.createElement("span");
waffieminus.appendChild(document.createTextNode("-"));
waffieminus.style.padding = "5px";

waffie.onclick = function () {
  waffie.innerHTML = "";
  waffie.style.fontSize = "13px";
  waffie.style.backgroundColor = "brown";
  waffie.style.color = "white";
  waffie.style.transition = "0s";
  waffie.style.width = "100px";
  waffie.style.display = "flex";
  waffie.style.justifyContent = "space-between";
  waffie.style.alignItems = "center";
  waffie.style.padding = "0px";
  waffie.appendChild(waffieplas);
  waffie.appendChild(waffieNumberOfOrders);
  waffie.appendChild(waffieminus);
};

waffieplas.onclick = function (e) {
  e.stopPropagation();
  waffieNumberOfOrders.textContent =
    Number(waffieNumberOfOrders.textContent) + 1;
};

waffieminus.onclick = function (e) {
  waffieNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (waffieNumberOfOrders.textContent == "0") {
    waffie.innerHTML = "";
    let waffiefont = document.createElement("i");
    waffiefont.className = "fa-solid fa-basket-shopping";
    let waffietextOfAdd = document.createElement("p");
    let waffiePtext = document.createTextNode("add to cart");
    waffietextOfAdd.appendChild(waffiePtext);
    waffietextOfAdd.style.color = "black";
    waffie.appendChild(waffiefont);
    waffie.appendChild(waffietextOfAdd);
    waffie.style.backgroundColor = "white";
    waffie.style.padding = "5px ";
    waffie.style.display = "flex";
    waffie.style.justifyContent = "space-around";
    waffie.style.alignItems = "center";
    waffieNumberOfOrders.textContent =
      Number(waffieNumberOfOrders.textContent) + 1;
  }
};

let creme_brulee = document.getElementById("creme_brulee");

let creme_bruleeplas = document.createElement("span");
creme_bruleeplas.appendChild(document.createTextNode("+"));
creme_bruleeplas.style.padding = "5px";

let creme_bruleeNumberOfOrders = document.createElement("span");
creme_bruleeNumberOfOrders.appendChild(document.createTextNode(1));

let creme_bruleeminus = document.createElement("span");
creme_bruleeminus.appendChild(document.createTextNode("-"));
creme_bruleeminus.style.padding = "5px";

creme_brulee.onclick = function () {
  creme_brulee.innerHTML = "";
  creme_brulee.style.fontSize = "13px";
  creme_brulee.style.backgroundColor = "brown";
  creme_brulee.style.color = "white";
  creme_brulee.style.transition = "0s";
  creme_brulee.style.width = "100px";
  creme_brulee.style.display = "flex";
  creme_brulee.style.justifyContent = "space-between";
  creme_brulee.style.alignItems = "center";
  creme_brulee.style.padding = "0px";
  creme_brulee.appendChild(creme_bruleeplas);
  creme_brulee.appendChild(creme_bruleeNumberOfOrders);
  creme_brulee.appendChild(creme_bruleeminus);
};

creme_bruleeplas.onclick = function (e) {
  e.stopPropagation();
  creme_bruleeNumberOfOrders.textContent =
    Number(creme_bruleeNumberOfOrders.textContent) + 1;
};

creme_bruleeminus.onclick = function (e) {
  creme_bruleeNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (creme_bruleeNumberOfOrders.textContent == "0") {
    creme_brulee.innerHTML = "";
    let creme_bruleefont = document.createElement("i");
    creme_bruleefont.className = "fa-solid fa-basket-shopping";
    let creme_bruleetextOfAdd = document.createElement("p");
    let creme_bruleePtext = document.createTextNode("add to cart");
    creme_bruleetextOfAdd.appendChild(creme_bruleePtext);
    creme_bruleetextOfAdd.style.color = "black";
    creme_brulee.appendChild(creme_bruleefont);
    creme_brulee.appendChild(creme_bruleetextOfAdd);
    creme_brulee.style.backgroundColor = "white";
    creme_brulee.style.padding = "5px ";
    creme_brulee.style.display = "flex";
    creme_brulee.style.justifyContent = "space-around";
    creme_brulee.style.alignItems = "center";
    creme_bruleeNumberOfOrders.textContent =
      Number(creme_bruleeNumberOfOrders.textContent) + 1;
  }
};

let macaron = document.getElementById("macaron");

let macaronplas = document.createElement("span");
macaronplas.appendChild(document.createTextNode("+"));
macaronplas.style.padding = "5px";

let macaronNumberOfOrders = document.createElement("span");
macaronNumberOfOrders.appendChild(document.createTextNode(1));

let macaronminus = document.createElement("span");
macaronminus.appendChild(document.createTextNode("-"));
macaronminus.style.padding = "5px";

macaron.onclick = function () {
  macaron.innerHTML = "";
  macaron.style.fontSize = "13px";
  macaron.style.backgroundColor = "brown";
  macaron.style.color = "white";
  macaron.style.transition = "0s";
  macaron.style.width = "100px";
  macaron.style.display = "flex";
  macaron.style.justifyContent = "space-between";
  macaron.style.alignItems = "center";
  macaron.style.padding = "0px";
  macaron.appendChild(macaronplas);
  macaron.appendChild(macaronNumberOfOrders);
  macaron.appendChild(macaronminus);
};

macaronplas.onclick = function (e) {
  e.stopPropagation();
  macaronNumberOfOrders.textContent =
    Number(macaronNumberOfOrders.textContent) + 1;
};

macaronminus.onclick = function (e) {
  macaronNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (macaronNumberOfOrders.textContent == "0") {
    macaron.innerHTML = "";
    let macaronfont = document.createElement("i");
    macaronfont.className = "fa-solid fa-basket-shopping";
    let macarontextOfAdd = document.createElement("p");
    let macaronPtext = document.createTextNode("add to cart");
    macarontextOfAdd.appendChild(macaronPtext);
    macarontextOfAdd.style.color = "black";
    macaron.appendChild(macaronfont);
    macaron.appendChild(macarontextOfAdd);
    macaron.style.backgroundColor = "white";
    macaron.style.padding = "5px ";
    macaron.style.display = "flex";
    macaron.style.justifyContent = "space-around";
    macaron.style.alignItems = "center";
    macaronNumberOfOrders.textContent =
      Number(macaronNumberOfOrders.textContent) + 1;
  }
};

let tiramisu = document.getElementById("tiramisu");

let tiramisuplas = document.createElement("span");
tiramisuplas.appendChild(document.createTextNode("+"));
tiramisuplas.style.padding = "5px";

let tiramisuNumberOfOrders = document.createElement("span");
tiramisuNumberOfOrders.appendChild(document.createTextNode(1));

let tiramisuminus = document.createElement("span");
tiramisuminus.appendChild(document.createTextNode("-"));
tiramisuminus.style.padding = "5px";

tiramisu.onclick = function () {
  tiramisu.innerHTML = "";
  tiramisu.style.fontSize = "13px";
  tiramisu.style.backgroundColor = "brown";
  tiramisu.style.color = "white";
  tiramisu.style.transition = "0s";
  tiramisu.style.width = "100px";
  tiramisu.style.display = "flex";
  tiramisu.style.justifyContent = "space-between";
  tiramisu.style.alignItems = "center";
  tiramisu.style.padding = "0px";
  tiramisu.appendChild(tiramisuplas);
  tiramisu.appendChild(tiramisuNumberOfOrders);
  tiramisu.appendChild(tiramisuminus);
};

tiramisuplas.onclick = function (e) {
  e.stopPropagation();
  tiramisuNumberOfOrders.textContent =
    Number(tiramisuNumberOfOrders.textContent) + 1;
};

tiramisuminus.onclick = function (e) {
  tiramisuNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (tiramisuNumberOfOrders.textContent == "0") {
    tiramisu.innerHTML = "";
    let tiramisufont = document.createElement("i");
    tiramisufont.className = "fa-solid fa-basket-shopping";
    let tiramisutextOfAdd = document.createElement("p");
    let tiramisuPtext = document.createTextNode("add to cart");
    tiramisutextOfAdd.appendChild(tiramisuPtext);
    tiramisutextOfAdd.style.color = "black";
    tiramisu.appendChild(tiramisufont);
    tiramisu.appendChild(tiramisutextOfAdd);
    tiramisu.style.backgroundColor = "white";
    tiramisu.style.padding = "5px ";
    tiramisu.style.display = "flex";
    tiramisu.style.justifyContent = "space-around";
    tiramisu.style.alignItems = "center";
    tiramisuNumberOfOrders.textContent =
      Number(tiramisuNumberOfOrders.textContent) + 1;
  }
};

let baklava = document.getElementById("baklava");

let baklavaplas = document.createElement("span");
baklavaplas.appendChild(document.createTextNode("+"));
baklavaplas.style.padding = "5px";

let baklavaNumberOfOrders = document.createElement("span");
baklavaNumberOfOrders.appendChild(document.createTextNode(1));

let baklavaminus = document.createElement("span");
baklavaminus.appendChild(document.createTextNode("-"));
baklavaminus.style.padding = "5px";

baklava.onclick = function () {
  baklava.innerHTML = "";
  baklava.style.fontSize = "13px";
  baklava.style.backgroundColor = "brown";
  baklava.style.color = "white";
  baklava.style.transition = "0s";
  baklava.style.width = "100px";
  baklava.style.display = "flex";
  baklava.style.justifyContent = "space-between";
  baklava.style.alignItems = "center";
  baklava.style.padding = "0px";
  baklava.appendChild(baklavaplas);
  baklava.appendChild(baklavaNumberOfOrders);
  baklava.appendChild(baklavaminus);
};

baklavaplas.onclick = function (e) {
  e.stopPropagation();
  baklavaNumberOfOrders.textContent =
    Number(baklavaNumberOfOrders.textContent) + 1;
};

baklavaminus.onclick = function (e) {
  baklavaNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (baklavaNumberOfOrders.textContent == "0") {
    baklava.innerHTML = "";
    let baklavafont = document.createElement("i");
    baklavafont.className = "fa-solid fa-basket-shopping";
    let baklavatextOfAdd = document.createElement("p");
    let baklavaPtext = document.createTextNode("add to cart");
    baklavatextOfAdd.appendChild(baklavaPtext);
    baklavatextOfAdd.style.color = "black";
    baklava.appendChild(baklavafont);
    baklava.appendChild(baklavatextOfAdd);
    baklava.style.backgroundColor = "white";
    baklava.style.padding = "5px ";
    baklava.style.display = "flex";
    baklava.style.justifyContent = "space-around";
    baklava.style.alignItems = "center";
    baklavaNumberOfOrders.textContent =
      Number(baklavaNumberOfOrders.textContent) + 1;
  }
};

let meringue = document.getElementById("meringue");

let meringueplas = document.createElement("span");
meringueplas.appendChild(document.createTextNode("+"));
meringueplas.style.padding = "5px";

let meringueNumberOfOrders = document.createElement("span");
meringueNumberOfOrders.appendChild(document.createTextNode(1));

let meringueminus = document.createElement("span");
meringueminus.appendChild(document.createTextNode("-"));
meringueminus.style.padding = "5px";

meringue.onclick = function () {
  meringue.innerHTML = "";
  meringue.style.fontSize = "13px";
  meringue.style.backgroundColor = "brown";
  meringue.style.color = "white";
  meringue.style.transition = "0s";
  meringue.style.width = "100px";
  meringue.style.display = "flex";
  meringue.style.justifyContent = "space-between";
  meringue.style.alignItems = "center";
  meringue.style.padding = "0px";
  meringue.appendChild(meringueplas);
  meringue.appendChild(meringueNumberOfOrders);
  meringue.appendChild(meringueminus);
};

meringueplas.onclick = function (e) {
  e.stopPropagation();
  meringueNumberOfOrders.textContent =
    Number(meringueNumberOfOrders.textContent) + 1;
};

meringueminus.onclick = function (e) {
  meringueNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (meringueNumberOfOrders.textContent == "0") {
    meringue.innerHTML = "";
    let meringuefont = document.createElement("i");
    meringuefont.className = "fa-solid fa-basket-shopping";
    let meringuetextOfAdd = document.createElement("p");
    let meringuePtext = document.createTextNode("add to cart");
    meringuetextOfAdd.appendChild(meringuePtext);
    meringuetextOfAdd.style.color = "black";
    meringue.appendChild(meringuefont);
    meringue.appendChild(meringuetextOfAdd);
    meringue.style.backgroundColor = "white";
    meringue.style.padding = "5px ";
    meringue.style.display = "flex";
    meringue.style.justifyContent = "space-around";
    meringue.style.alignItems = "center";
    meringueNumberOfOrders.textContent =
      Number(meringueNumberOfOrders.textContent) + 1;
  }
};

let cake = document.getElementById("cake");

let cakeplas = document.createElement("span");
cakeplas.appendChild(document.createTextNode("+"));
cakeplas.style.padding = "5px";

let cakeNumberOfOrders = document.createElement("span");
cakeNumberOfOrders.appendChild(document.createTextNode(1));

let cakeminus = document.createElement("span");
cakeminus.appendChild(document.createTextNode("-"));
cakeminus.style.padding = "5px";

cake.onclick = function () {
  cake.innerHTML = "";
  cake.style.fontSize = "13px";
  cake.style.backgroundColor = "brown";
  cake.style.color = "white";
  cake.style.transition = "0s";
  cake.style.width = "100px";
  cake.style.display = "flex";
  cake.style.justifyContent = "space-between";
  cake.style.alignItems = "center";
  cake.style.padding = "0px";
  cake.appendChild(cakeplas);
  cake.appendChild(cakeNumberOfOrders);
  cake.appendChild(cakeminus);
};

cakeplas.onclick = function (e) {
  e.stopPropagation();
  cakeNumberOfOrders.textContent = Number(cakeNumberOfOrders.textContent) + 1;
};

cakeminus.onclick = function (e) {
  cakeNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (cakeNumberOfOrders.textContent == "0") {
    cake.innerHTML = "";
    let cakefont = document.createElement("i");
    cakefont.className = "fa-solid fa-basket-shopping";
    let caketextOfAdd = document.createElement("p");
    let cakePtext = document.createTextNode("add to cart");
    caketextOfAdd.appendChild(cakePtext);
    caketextOfAdd.style.color = "black";
    cake.appendChild(cakefont);
    cake.appendChild(caketextOfAdd);
    cake.style.backgroundColor = "white";
    cake.style.padding = "5px ";
    cake.style.display = "flex";
    cake.style.justifyContent = "space-around";
    cake.style.alignItems = "center";
    cakeNumberOfOrders.textContent = Number(cakeNumberOfOrders.textContent) + 1;
  }
};

let brownie = document.getElementById("brownie");

let brownieplas = document.createElement("span");
brownieplas.appendChild(document.createTextNode("+"));
brownieplas.style.padding = "5px";

let brownieNumberOfOrders = document.createElement("span");
brownieNumberOfOrders.appendChild(document.createTextNode(1));

let brownieminus = document.createElement("span");
brownieminus.appendChild(document.createTextNode("-"));
brownieminus.style.padding = "5px";

brownie.onclick = function () {
  brownie.innerHTML = "";
  brownie.style.fontSize = "13px";
  brownie.style.backgroundColor = "brown";
  brownie.style.color = "white";
  brownie.style.transition = "0s";
  brownie.style.width = "100px";
  brownie.style.display = "flex";
  brownie.style.justifyContent = "space-between";
  brownie.style.alignItems = "center";
  brownie.style.padding = "0px";
  brownie.appendChild(brownieplas);
  brownie.appendChild(brownieNumberOfOrders);
  brownie.appendChild(brownieminus);
};

brownieplas.onclick = function (e) {
  e.stopPropagation();
  brownieNumberOfOrders.textContent =
    Number(brownieNumberOfOrders.textContent) + 1;
};

brownieminus.onclick = function (e) {
  brownieNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (brownieNumberOfOrders.textContent == "0") {
    brownie.innerHTML = "";
    let browniefont = document.createElement("i");
    browniefont.className = "fa-solid fa-basket-shopping";
    let brownietextOfAdd = document.createElement("p");
    let browniePtext = document.createTextNode("add to cart");
    brownietextOfAdd.appendChild(browniePtext);
    brownietextOfAdd.style.color = "black";
    brownie.appendChild(browniefont);
    brownie.appendChild(brownietextOfAdd);
    brownie.style.backgroundColor = "white";
    brownie.style.padding = "5px ";
    brownie.style.display = "flex";
    brownie.style.justifyContent = "space-around";
    brownie.style.alignItems = "center";
    brownieNumberOfOrders.textContent =
      Number(brownieNumberOfOrders.textContent) + 1;
  }
};

let panna_cotta = document.getElementById("panna_cotta");

let panna_cottaplas = document.createElement("span");
panna_cottaplas.appendChild(document.createTextNode("+"));
panna_cottaplas.style.padding = "5px";

let panna_cottaNumberOfOrders = document.createElement("span");
panna_cottaNumberOfOrders.appendChild(document.createTextNode(1));

let panna_cottaminus = document.createElement("span");
panna_cottaminus.appendChild(document.createTextNode("-"));
panna_cottaminus.style.padding = "5px";

panna_cotta.onclick = function () {
  panna_cotta.innerHTML = "";
  panna_cotta.style.fontSize = "13px";
  panna_cotta.style.backgroundColor = "brown";
  panna_cotta.style.color = "white";
  panna_cotta.style.transition = "0s";
  panna_cotta.style.width = "100px";
  panna_cotta.style.display = "flex";
  panna_cotta.style.justifyContent = "space-between";
  panna_cotta.style.alignItems = "center";
  panna_cotta.style.padding = "0px";
  panna_cotta.appendChild(panna_cottaplas);
  panna_cotta.appendChild(panna_cottaNumberOfOrders);
  panna_cotta.appendChild(panna_cottaminus);
};

panna_cottaplas.onclick = function (e) {
  e.stopPropagation();
  panna_cottaNumberOfOrders.textContent =
    Number(panna_cottaNumberOfOrders.textContent) + 1;
};

panna_cottaminus.onclick = function (e) {
  panna_cottaNumberOfOrders.textContent -= 1;
  e.stopPropagation();
  if (panna_cottaNumberOfOrders.textContent == "0") {
    panna_cotta.innerHTML = "";
    let panna_cottafont = document.createElement("i");
    panna_cottafont.className = "fa-solid fa-basket-shopping";
    let panna_cottatextOfAdd = document.createElement("p");
    let panna_cottaPtext = document.createTextNode("add to cart");
    panna_cottatextOfAdd.appendChild(panna_cottaPtext);
    panna_cottatextOfAdd.style.color = "black";
    panna_cotta.appendChild(panna_cottafont);
    panna_cotta.appendChild(panna_cottatextOfAdd);
    panna_cotta.style.backgroundColor = "white";
    panna_cotta.style.padding = "5px ";
    panna_cotta.style.display = "flex";
    panna_cotta.style.justifyContent = "space-around";
    panna_cotta.style.alignItems = "center";
    panna_cottaNumberOfOrders.textContent =
      Number(panna_cottaNumberOfOrders.textContent) + 1;
  }
};
