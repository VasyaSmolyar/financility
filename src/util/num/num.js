function parsePercentageString(str) {
  return parseFloat(str.replace(/,/g, '.').replace('%', ''));
}

// discrete Fourier transform (DFT)
function dft(array) {
  const n = array.length;
  const complexArray = array.map((num) => ({
    real: num.real || num,
    imag: num.imag || 0,
  }));

  for (let k = 0; k < n; k++) {
    const result = { real: 0, imag: 0 };
    for (let j = 0; j < n; j++) {
      const exp = -2 * Math.PI * j * k / n;
      result.real += complexArray[j].real * Math.cos(exp) + complexArray[j].imag * Math.sin(exp);
      result.imag += complexArray[j].real * Math.sin(exp) - complexArray[j].imag * Math.cos(exp);
    }
    result.real /= n;
    result.imag /= n;
    complexArray[k] = result;
  }

  return complexArray;
}

export { parsePercentageString, dft };
