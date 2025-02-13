import "./styles.css";

import Card from "./Card/Card.jsx";
import {
    itProfessionsArray,
    testimonialMessages,
} from "../../config/randomUsers.js";

// eslint-disable-next-line react/prop-types
function Carousel({ usersData }) {
    return (
        <section className="wrapper">
            <i id="left" className="ri-arrow-left-wide-fill"></i>

            <ul className="carousel">
                {/* eslint-disable-next-line react/prop-types */}
                {usersData?.length > 0 &&
                    usersData.map((user, index) => {
                        return (
                            <Card
                                key={index}
                                data={user}
                                messages={testimonialMessages}
                                professions={itProfessionsArray}
                            />
                        );
                    })}
            </ul>
            <i className="ri-arrow-right-wide-fill"></i>
        </section>
    );
}

export default Carousel;
