import { useState } from "react";
import "./ImcCalc.css";
import Button from "./Button";

const ImcCalc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  console.log(height, weight);

  const clearForm = (e) => {
    e.preventDefault()
    setHeight("")
    setWeight("")
  }

  const validDigits = (text) => {
    return text.replace(/[^0-9,]/g, "")
  }

  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setHeight(updateValue);
  }
  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setWeight(updateValue);
  }

  return (
    <div id="calc-container">
      <h2>Calculadora de IMC</h2>
      <form id="imc-form">
        <div className="form-inputs">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              name="height"
              placeholder="1,76"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input
              type="text"
              name="weight"
              placeholder="90,40"
              onChange={(e) => handleWeightChange(e)}
              value={weight}
            />
          </div>
          <div className="action-control">
            <Button id="calc-btn" text="Calcular" />
            <Button id="clear-btn" text="Limpar" action={clearForm}/>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ImcCalc;
