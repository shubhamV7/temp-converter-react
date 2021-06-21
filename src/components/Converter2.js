import React, { useState } from "react";
import InputBox from "./InputBox";

function Converter2() {
    const [tempC, setTempC] = useState(0);

    const [tempF, setTempF] = useState(32);


    function convertToF(tempC) {
        return tempC * (9 / 5) + 32;
    }

    function convertToC(tempF) {
        return (tempF - 32) * (5 / 9);
    }

    return (
        <table >
            <tr>
                <td>
                    <InputBox label="Celsius" type="number"
                        value={tempC} converterFunction={convertToF}
                        ownValueSetter={setTempC} valueSetter={setTempF} >
                    </InputBox>
                </td>
                <td>
                    <InputBox label="Fahrenheit" type="number"
                        value={tempF} converterFunction={convertToC}
                        ownValueSetter={setTempF} valueSetter={setTempC} >
                    </InputBox>
                </td>
            </tr>
        </table>

    );
}

export default Converter2;
