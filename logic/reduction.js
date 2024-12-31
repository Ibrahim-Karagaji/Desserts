function reductionOrdersTotle(e) {
  e.textContent = e.textContent.replace(/\d+/, (match) => parseInt(match) - 1);
}
