import Menu from "../Menu/Menu";
import { useState } from "react";
import "./styles.css";
function Heading() {
    const [menuVisibility, setMenuVisibility] = useState(false);

    function toogleMenu() {
        setMenuVisibility(!menuVisibility);
    }
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

                <i className="ri-menu-line burger" onClick={toogleMenu}></i>
                <Menu menuVisibility={menuVisibility} />
            </header>
        </>
    );
}
export default Heading;
