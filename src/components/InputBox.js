

function InputBox(props) {

    let label = props.label;
    let type = props.type;
    let value = props.value;
    let converterFunction = props.converterFunction;
    let valueSetter = props.valueSetter;
    let ownValueSetter = props.ownValueSetter;

    return (
        <table border="1">
            <tr>
                <span>{label}</span>
            </tr>
            <tr>
                <input type={type}
                    value={value}
                    onChange={(event) => {
                        let temp = event.target.value;
                        let convertedTemp = converterFunction(temp);
                        valueSetter(convertedTemp);
                        ownValueSetter(temp);
                    }}
                />
            </tr>
        </table>
    );
}

export default InputBox;
