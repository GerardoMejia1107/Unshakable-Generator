import DynamicHeading from "../DynamicHeading/DynamicHeading.jsx";
import "./styles.css";
function Hero() {
    return (
        <section id="hero__container">
            <DynamicHeading headingType={"h1"}>
                Custom Password Generator
            </DynamicHeading>
            <p>
                User our password generator to create strong passwords and be
                safe in the network. You just need to pick the parameters you
                want.
            </p>
        </section>
    );
}
export default Hero;
