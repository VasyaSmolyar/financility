import React, { useEffect } from "react";
import MyResponsiveLine, { getSP500, getData } from "./component/chart/line";
import { parsePercentageString } from './util/num';

function App() {
  const [ data, setData ] = React.useState();

  useEffect(() => {
    (async function() {
      const data = await getData();

      const list = data.map((item) => ({
        x: item["Дата"],
        y: parsePercentageString(item["Изм. %"])
      }))

      const result = getSP500(list.slice(0, 30));

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
    </div>
  );
}

export default App;
