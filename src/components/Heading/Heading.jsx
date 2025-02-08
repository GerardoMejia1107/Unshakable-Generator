import Menu from "../Menu/Menu";
import "./styles.css";
function Heading() {
    return (
        <>
            <header id="header">
                <section className="website__logo__name">
                    <img
                        src="../../assets/icons/orange-logo.png"
                        alt="company logo"
                        width="70"
                        className="website__logo"
                    />
                    <h1 className="website__name">Unshakable</h1>
                </section>

                <i className="ri-menu-line burger"></i>
                <input type="checkbox" id="menu-bar" />
                <Menu />
            </header>
        </>
    );
}
export default Heading;
