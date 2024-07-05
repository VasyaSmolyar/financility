import React, { useEffect } from "react";
import MyResponsiveLine, { getSP500, getData } from "./component/chart/line";
import MyResponsiveBar, { initialData } from "./component/chart/bar";
import { parsePercentageString, dft } from './util/num';

function App() {
  const [ data, setData ] = React.useState();

  useEffect(() => {
    (async function() {
      const data = await getData();

      const list = data.map((item) => (parsePercentageString(item["Изм. %"])));
      const rdft = dft(list);

      const result = getSP500(rdft.map((item) => ({
        x: item.imag,
        y: item.real,
      })).slice(0, 30));
      setData(result);
    })();
  }, [setData]);

  return (
    <div>
      <h1>Fin charts</h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      {data && (
        <MyResponsiveLine data={data} />
      )}
      <MyResponsiveBar data={initialData} />
    </div>
  );
}

export default App;
