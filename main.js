function addingTheOrder(order) {
    order.innerHTML = "";
    order.classList.toggle('adeed');
    

}

let i = document.getElementById("waffle-addtion");

i.onclick = function () {
    addingTheOrder(i);
    
};
