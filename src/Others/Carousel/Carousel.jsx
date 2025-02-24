import "./styles.css";

import Card from "./Card/Card.jsx";
import {
    itProfessionsArray,
    testimonialMessages,
} from "../../config/randomUsers.js";

// eslint-disable-next-line react/prop-types
function Carousel({ usersData }) {
    const carousel = document.querySelector(".carousel");

    const firstCardWidth = carousel?.firstElementChild?.offsetWidth;

    const stepLeft = () => {
        carousel.scrollLeft -= firstCardWidth;
    };

    const stepRight = () => {
        carousel.scrollLeft += firstCardWidth;
    };

    return (
        <section className="wrapper">
            <i
                id="left"
                className="ri-arrow-left-wide-fill"
                onClick={stepLeft}
            ></i>

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
            <i
                id="right"
                className="ri-arrow-right-wide-fill"
                onClick={stepRight}
            ></i>
        </section>
    );
}

export default Carousel;
