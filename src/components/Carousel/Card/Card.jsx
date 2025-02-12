/* eslint-disable react/prop-types */
import "./styles.css"
import {randomNumber} from "../../../config/randomUsers.js";

function Card({data, professions, messages}) {
    console.log(data)
    return (
        <li className="card">
            <div className="picture-container">
                <img src={data?.picture.large} alt="user-picture" draggable="false"/>
            </div>
            <h3 className="user-name">{data?.name.first + " " + data?.name.last}</h3>
            <h4 className="user-profession">
                {professions[randomNumber(professions)]}
            </h4>
            <p className="user-testimonial-message">
                {messages[randomNumber(messages)]}
            </p>
        </li>
    )
}

export default Card;