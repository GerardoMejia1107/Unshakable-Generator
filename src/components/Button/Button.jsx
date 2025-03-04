/* eslint-disable react/prop-types */
import "./styles.css";
function Button({ buttonInfo, action, children }) {
    return (
        <button className="button" onClick={action}>
            {children ? children : buttonInfo.text}
        </button>
    );
}
export default Button;
