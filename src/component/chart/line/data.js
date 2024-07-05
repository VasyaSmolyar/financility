import * as d3 from "d3";
import csv from './sp500.csv';

async function getData() {
    const data = await d3.csv(csv);
    return data;
}

function getSP500(data) {
  return [
    {
      "id": "S&P, Change, %",
      "color": "hsl(70, 70%, 50%)",
      "data": data
    },
  ]
};


export { getSP500, getData };
