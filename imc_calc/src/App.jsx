import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

import "./App.css";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault(); // impedir o site de reiniciar

    if(!weight || !height) return // se não for true total eu retorno

    const weightFloat = +weight.replace(",",".")
    const heightFloat = +height.replace(",",".")

    const imcResult = (weightFloat / Math.pow(heightFloat, 2)).toFixed(1)

    setImc(imcResult)

    //console.log(height, weight)
    //console.log("Evento disparado");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  return (
    <>
      <div className="container">
        {!imc ? <ImcCalc calcImc={calcImc} /> : <ImcTable data={data}/>}
      </div>
    </>
  );
}

export default App;
