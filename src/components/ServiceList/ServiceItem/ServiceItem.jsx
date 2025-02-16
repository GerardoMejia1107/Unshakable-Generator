/* eslint-disable react/prop-types */
import "./styles.css";
import { useState } from "react";

function ServiceItem({ data }) {
    const [servicesExpanded, setServicesExpanded] = useState(false);

    function expandServices() {
        setServicesExpanded(!servicesExpanded);
    }
    return (
        <li onClick={expandServices} className="service__item">
            <div className="service__name">
                <p>{data.serviceName}</p>
                <i
                    className={`ri-arrow-down-s-fill ${
                        servicesExpanded
                            ? "expand__content"
                            : "collapse__content"
                    }`}
                ></i>
            </div>

            <ul
                className={`sub__services__list ${
                    servicesExpanded ? "show" : "hide"
                }`}
            >
                {data.subServices.map((sub, index) => {
                    return <li key={index}>{sub}</li>;
                })}
            </ul>
        </li>
    );
}
export default ServiceItem;
