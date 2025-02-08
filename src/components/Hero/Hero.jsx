import "./styles.css";
function Hero() {
    return (
        <>
            <section id="hero__container">
                <h2>Custom Password Generator</h2>
                <p>
                    User our password generator to create strong passwords and
                    be safe in the network. You just need to pick the parameters
                    you want.
                </p>
                <div className="img__container">
                    <img
                        src="../../../public/assets/images/hero-img-dark-grey.svg"
                        alt=""
                    />
                </div>
            </section>
        </>
    );
}
export default Hero;
