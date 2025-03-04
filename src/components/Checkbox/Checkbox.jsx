/* eslint-disable react/prop-types */
import "./styles.css";

function Checkbox({ data, checked, onChange }) {
    return (
        <li>
            <input
                type="checkbox"
                name={data.name}
                id={data.name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={data.name}>{data.label}</label>
        </li>
    );
}

export default Checkbox;
