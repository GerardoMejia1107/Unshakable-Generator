import Button from "../Button/Button";
import { buttonsData } from "../../constants/buttonsData";
import { parametersData } from "../../constants/parametersData";
import "./styles.css";
import Checkbox from "../Checkbox/Checkbox";
function Generator() {
    return (
        <>
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
                                    Length: <span id="length__value">10</span>
                                </h3>
                                <input
                                    type="range"
                                    name="range"
                                    id="range"
                                    max={20}
                                    min={8}
                                />
                            </div>
                            <div className="font__parameters">
                                <ul className="parameters__list">
                                    {parametersData.map((parameter, index) => {
                                        return (
                                            <Checkbox
                                                elementData={parameter}
                                                key={index}
                                            />
                                        );
                                    })}
                                </ul>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}
export default Generator;
