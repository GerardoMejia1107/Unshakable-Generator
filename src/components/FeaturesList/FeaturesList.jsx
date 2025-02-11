import FeatureItem from "./FeatureItem/FeatureItem.jsx";
import "./styles.css";

/* eslint-disable react/prop-types */
function FeatureList({ featuresData }) {
    return (
        <ul id="features__list">
            {featuresData.map((feature, index) => {
                return <FeatureItem key={index} feature={feature} />;
            })}
        </ul>
    );
}
export default FeatureList;
