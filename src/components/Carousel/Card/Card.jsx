/* eslint-disable react/prop-types */
import "./styles.css";
import { randomNumber } from "../../../config/randomUsers.js";

function Card({ data, professions, messages }) {
    console.log(data);
    return (
        <li className="card">
            <div className="picture__container">
                <img
                    src={data?.picture.large}
                    alt="user-picture"
                    draggable="false"
                />
            </div>
            <h3 className="user__name">
                {data?.name.first + " " + data?.name.last}
            </h3>
            <div className="user__info">
                <h4 className="user__profession">
                    {professions[randomNumber(professions)]}
                </h4>
                <p className="user__testimonial__message">
                    {messages[randomNumber(messages)]}
                </p>
            </div>
        </li>
    );
}

export default Card;
