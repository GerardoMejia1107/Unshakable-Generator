/* eslint-disable react/prop-types */
import "./styles.css";
function DynamicHeading({ children, headingType }) {
    const headings = {
        h1: "big__H",
        h2: "medium__H",
        h3: "small__H",
    };
    const HeadingTag = headingType;

    return (
        <HeadingTag className={`heading ${headings[headingType]}`}>
            {children}
        </HeadingTag>
    );
}
export default DynamicHeading;
