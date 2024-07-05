function parsePercentageString(str) {
  return parseFloat(str.replace(/,/g, '.').replace('%', ''));
}

export { parsePercentageString };
