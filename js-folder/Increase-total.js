function IncreaseTotal(e) {
  e.textContent = e.textContent.replace(/\d+/, (match) => parseInt(match) + 1);
  console.log(typeof e.textContent )
}

function ReduceTotal(e) {
  e.textContent = e.textContent.replace(/\d+/, (match) => parseInt(match) - 1);
  console.log(typeof e.textContent )
}

