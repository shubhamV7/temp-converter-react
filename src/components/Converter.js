import React, { useState } from "react";

function Converter() {
  const [tempC, setTempC] = useState(0);
  const [errorTempC, setErrorTempC] = useState("");
  const [tempF, setTempF] = useState(32);
  const [errorTempF, setErrorTempF] = useState("");

  function convertToF(tempC) {
    return tempC * (9 / 5) + 32;
  }

  function convertToC(tempF) {
    return (tempF - 32) * (5 / 9);
  }

  return (
    <>
      <p>
        <span>Temperature in Celsius </span>
        <input type="text" value={tempC}
          onChange={(event) => {
            let temp = event.target.value.trim();
            if (!isNaN(temp) || temp[0] === "-") {
              setTempF(convertToF(temp));
              setTempC(temp);
              setErrorTempC("");
            } else {
              setErrorTempC("Invalid Temperature(must be a numeric value)");
            }
          }}
        />
        <span>{errorTempC} </span>
      </p>

      <p>
        <span>Temperature in Fahrenheit </span>
        <input type="text" value={tempF}
          onChange={(event) => {
            let temp = event.target.value.trim();
            if (!isNaN(temp) || temp[0] === "-") {
              setTempC(convertToC(temp));
              setTempF(temp);
              setErrorTempF("");
            } else {
              setErrorTempF("Invalid Temperature(must be a numeric value)");
            }
          }}
        />
        <span>{errorTempF} </span>
      </p>
    </>
  );
}

export default Converter;
