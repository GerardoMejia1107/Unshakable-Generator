/* eslint-disable react/prop-types */
import ServiceItem from "./ServiceItem/ServiceItem.jsx";
import "./styles.css";

function ServiceList({ data }) {
    return (
        <ul className="services__list">
            {data.map((service, index) => {
                return <ServiceItem key={index} data={service} />;
            })}
        </ul>
    );
}

export default ServiceList;
