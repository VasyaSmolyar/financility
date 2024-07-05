import React, { useEffect } from "react";
import MyResponsiveLine, { getSP500, getData } from "./component/chart/line";
import MyResponsiveBar from "./component/chart/bar";
import { parsePercentageString, groupByFrequency } from './util/num';

function App() {
  const [ data, setData ] = React.useState();
  const [ barData, setBarData ] = React.useState();

  useEffect(() => {
    (async function() {
      const data = await getData();

      const list = data.map((item) => ({
        x: item["Дата"],
        y: parsePercentageString(item["Изм. %"])
      }));

      const result = getSP500(list.slice(0, 30));
      setData(result);

      const barData = groupByFrequency(list.map((item) => item.y), 50);
      setBarData(barData.map((item, index) => (
        {
          "country": index,
          "hot dog": item.length,
          "hot dogColor": "hsl(119, 70%, 50%)",
        }
      )));
    })();
  }, [setData]);

  return (
    <div>
      <h1>Fin charts</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      {data && (
        <MyResponsiveLine data={data} />
      )}
      {barData && (
        <MyResponsiveBar data={barData} />
      )}
    </div>
  );
}

export default App;
