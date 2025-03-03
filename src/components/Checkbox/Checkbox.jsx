/* eslint-disable react/prop-types */
import "./styles.css";
import { useState } from "react";

function Checkbox({ elementData }) {
    const [status, setStatus] = useState(false);

    return (
        <li>
            <input
                type="checkbox"
                name={elementData.name}
                id={elementData.name}
                checked={status}
                onChange={() => setStatus(!status)}
            />
            <label htmlFor={elementData.name}>{elementData.text}</label>
        </li>
    );
}

export default Checkbox;
