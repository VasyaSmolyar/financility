import MyResponsiveLine, { data } from "./component/chart/line";

function App() {
  return (
    <div>
      <h1>Fin charts</h1>
      <MyResponsiveLine data={data} />
    </div>
  );
}

export default App;
