/* eslint-disable react/prop-types */
function FAQsItem({ FAQ }) {
    return (
        <li className="FAQs__item">
            <div className="question">{FAQ.question}</div>
            <div className="answer">{}</div>
        </li>
    );
}

export default FAQsItem;
