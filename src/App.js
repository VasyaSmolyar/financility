import React, { useEffect } from "react";
import MyResponsiveLine, { initialData, getData } from "./component/chart/line";
import { parsePercentageString } from './util/num';

function App() {
  const [ data, setData ] = React.useState(initialData);

  useEffect(() => {
    (async function() {
      const data =  await getData();

      const list = data.map((item) => parsePercentageString(item["Изм. %"]))
      setData(list);
    })();
  }, [setData]);

  return (
    <div>
      <h1>Fin charts</h1>
      <p>{JSON.stringify(data)}</p>
      <MyResponsiveLine data={initialData} />
    </div>
  );
}

export default App;
