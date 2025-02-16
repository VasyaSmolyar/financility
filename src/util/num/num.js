import * as d3 from "d3";


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

function groupByFrequency(numbers, n) {
  // Count the frequency of each number
  const frequencyCounts = d3.rollup(numbers, v => v.length, d => d);

  // Convert the Map to an array of [number, frequency] pairs
  const frequencyArray = Array.from(frequencyCounts, ([number, frequency]) => ({ number, frequency }));

  // Sort the array by frequency in descending order
  frequencyArray.sort((a, b) => b.frequency - a.frequency);

  // Group the numbers into n groups
  const groups = Array.from({ length: n }, () => []);
  frequencyArray.forEach((item, index) => {
      groups[index % n].push(item);
  });

  return groups;
}

export { parsePercentageString, dft, groupByFrequency};
