/* eslint-disable react/prop-types */
import "./styles.css";

function FeatureItem({ feature }) {
    return (
        <li className="feature__item">
            <div className="img__feature">
                <img src={feature.img} alt="" />
            </div>
            <div className="description__feature">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
            </div>
        </li>
    );
}
export default FeatureItem;
