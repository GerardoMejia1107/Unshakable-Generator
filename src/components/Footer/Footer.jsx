import ServiceList from "../ServiceList/ServiceList.jsx";
import "./styles.css";

const socialMediaIcons = [
    "ri-instagram-line",
    "ri-twitter-x-line",
    "ri-facebook-circle-line",
    "ri-whatsapp-line",
    "ri-youtube-line",
];

const services = [
    {
        serviceName: "For Home",
        subServices: [
            "Support",
            "Security",
            "Privacy",
            "Performance",
            "Blog",
            "Foreum",
        ],
    },
    {
        serviceName: "For Business",
        subServices: [
            "Business support",
            "Business security",
            "Business products",
            "Business partners",
            "Affiliates",
        ],
    },
    {
        serviceName: "For partners",
        subServices: ["Mobile Carriers"],
    },
    {
        serviceName: "Company",
        subServices: [
            "Contact us",
            "Careers",
            "Press center",
            "Digital trust",
            "Technology",
            "Reserch participation",
        ],
    },
];

function Footer() {
    const date = new Date();

    return (
        <footer>
            <section className="footer__main__content">
                <article className="contact__info">
                    <div className="brand__name">
                        <img src="./assets/icons/orange-logo.png" />
                        <h1>Unshakable</h1>
                    </div>

                    <ul className="social__media__list">
                        {socialMediaIcons.map((icon, index) => {
                            return (
                                <li key={index}>
                                    <i className={icon}></i>
                                </li>
                            );
                        })}
                    </ul>
                </article>

                <article className="brand__services">
                    <ServiceList data={services} />
                </article>
            </section>

            <section className="copy__right">
                <span>
                    <i className="ri-copyright-line"></i>
                    {date.getFullYear()} Unshakable Inc. All rights reserved.
                </span>
            </section>
        </footer>
    );
}
export default Footer;
