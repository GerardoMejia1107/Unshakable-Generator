import { useState, useEffect } from "react";
import Button from "../Button/Button";
import { buttonsData } from "../../constants/buttonsData";
import { parameters } from "../../constants/parametersData";
import "./styles.css";
import Checkbox from "../Checkbox/Checkbox";
function Generator() {
    const [pool, setPool] = useState([]);
    const [range, setRange] = useState(8); //Use state for range

    //User state to manage the checkboxes of parameters the user wants to include to generate its password
    const [selectedOptions, setSelectedOptions] = useState({
        uppercase: false,
        lowercase: false,
        numbers: false,
        symbols: false,
    });

    const handleCheckboxChange = (name) => {
        setSelectedOptions((prev) => ({
            ...prev, // the rest of options remain the same
            [name]: !prev[name], //name -> specific checkbox option being changed
        }));
    };

    useEffect(() => {
        const activeOptions = Object.entries(selectedOptions)
            .filter(([key, value]) => value)
            .map(([key]) => key);

        const interval = parameters
            .filter((param) => activeOptions.includes(param.name))
            .map((filtered) => filtered.lot)
            .join("");

        setPool(interval);
    }, [selectedOptions]);

    return (
        <main id="generator__section">
            <section className="generaton__content">
                <div className="generator__img__decoration">
                    <img
                        src="../../../assets/images/hero-img-dark-grey.svg"
                        alt=""
                    />
                </div>

                <section className="generator">
                    <div className="input__generation">
                        <p></p>
                        <i className="ri-loop-right-line"></i>
                    </div>
                    <Button buttonInfo={buttonsData.copy} />

                    <section className="parameters__container">
                        <div className="length__parameter">
                            <h3>
                                Length: <span id="length__value">{range}</span>
                            </h3>
                            <input
                                type="range"
                                name="range"
                                id="range"
                                max={20}
                                min={8}
                                value={range}
                                onChange={(e) => setRange(e.target.value)}
                            />
                        </div>
                        <div className="font__parameters">
                            <ul className="parameters__list">
                                {parameters.map((parameter, index) => {
                                    return (
                                        <Checkbox
                                            key={index}
                                            data={parameter}
                                            checked={
                                                selectedOptions[parameter.name]
                                            }
                                            onChange={() => {
                                                handleCheckboxChange(
                                                    parameter.name
                                                );
                                            }}
                                        />
                                    );
                                })}
                            </ul>
                        </div>
                    </section>
                </section>
            </section>
        </main>
    );
}
export default Generator;
