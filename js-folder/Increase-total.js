function IncreaseTotal(e) {
  e.textContent = e.textContent.replace(/\d+/, (match) => parseInt(match) + 1);
}

function ReduceTotal(e) {
  e.textContent = e.textContent.replace(/\d+/, (match) => parseInt(match) - 1);
}

