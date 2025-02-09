/* eslint-disable react/prop-types */
import "./styles.css";
function Checkbox({ elementData }) {
    return (
        <li>
            <input
                type="checkbox"
                name={elementData.name}
                id={elementData.name}
            />
            <label htmlFor={elementData.name}>{elementData.text}</label>
        </li>
    );
}

export default Checkbox;
