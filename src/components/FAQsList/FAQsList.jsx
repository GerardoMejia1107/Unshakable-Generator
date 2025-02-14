import "./styles.css";
import { FAQsData } from "../../constants/FAQsData.js";
import FAQsItem from "./FAQsItem/FAQsItem.jsx";
function FAQsList() {
    return (
        <ul className="FAQs__list">
            {FAQsData.map((item, index) => {
                return <FAQsItem key={index} FAQ={item} />;
            })}
        </ul>
    );
}
export default FAQsList;
