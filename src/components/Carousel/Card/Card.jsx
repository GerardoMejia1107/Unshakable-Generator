/* eslint-disable react/prop-types */
import "./styles.css";
import { randomNumber } from "../../../config/randomUsers.js";

function Card({ data, professions, messages }) {
    return (
        <li className="card">
            <div className="personal__data">
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
                <h4 className="user__profession">
                    {professions[randomNumber(professions)]}
                </h4>
            </div>

            <div className="user__info">
                <blockquote className="user__testimonial__message">{`"${
                    messages[randomNumber(messages)]
                }"`}</blockquote>
            </div>
        </li>
    );
}

export default Card;
