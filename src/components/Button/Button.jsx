/* eslint-disable react/prop-types */
import "./styles.css";
function Button({ buttonInfo, action }) {
    return (
        <button className="button" onClick={action}>
            {buttonInfo.text}
        </button>
    );
}
export default Button;
