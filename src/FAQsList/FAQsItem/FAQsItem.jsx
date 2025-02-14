/* eslint-disable react/prop-types */
import "./styles.css";
import { useState } from "react";
function FAQsItem({ FAQ }) {
    const [isExpanded, setIsExpanded] = useState(false);
    function expandContent() {
        setIsExpanded(!isExpanded);
    }
    return (
        <li className="FAQs__item">
            <div
                className="question"
                onClick={expandContent}
                aria-expanded={isExpanded}
            >
                <h4>{FAQ.question}</h4>
                {!isExpanded ? (
                    <i className="ri-add-circle-line"></i>
                ) : (
                    <i className="ri-subtract-line"></i>
                )}
            </div>
            <div className={`answer ${isExpanded ? "expand" : "collapse"}`}>
                {<p>{FAQ.answer}</p>}
            </div>
        </li>
    );
}

export default FAQsItem;
