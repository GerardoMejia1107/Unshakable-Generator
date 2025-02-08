/* eslint-disable react/prop-types */
import "./styles.css";
import MenuItem from "./MenuItem/MenuItem.jsx";

//Array of object who contains all the menu options and info
const menuItems = [
    { label: "Generator", icon: "ri-bard-line", link: "#" },
    { label: "Verifier", icon: "ri-verified-badge-line", link: "#" },
    {
        label: "Products",
        icon: "ri-arrow-down-wide-line",
        submenu: [
            {
                label: "Pro",
                description: "Lorem ipsum dolor sit amet.",
                link: "#",
            },
            {
                label: "Business",
                description: "Lorem ipsum dolor sit amet.",
                link: "#",
            },
        ],
    },
    {
        label: "Resources",
        icon: "ri-arrow-down-wide-line",
        submenu: [
            {
                label: "Security Architecture",

                icon: "ri-hammer-line",
                link: "#",
            },
            {
                label: "Trust Center",

                icon: "ri-lock-password-line",
                link: "#",
            },
            {
                label: "Compliance Center",

                icon: "ri-thumb-up-line",
                link: "#",
            },
            { label: "Blog", icon: "ri-news-line", link: "#" },
            {
                label: "Unshakable Education",
                icon: "ri-school-line",
                link: "#",
            },
        ],
    },
    { label: "Contact", icon: "ri-contacts-book-line", link: "#" },
];

function Menu({ menuVisibility }) {
    return (
        <nav
            className={`navbar ${
                menuVisibility ? "navbar__animation" : "navbar__hide"
            }`}
        >
            <ul>
                {menuItems.map((item, index) => {
                    return <MenuItem key={index} item={item} />;
                })}
            </ul>
        </nav>
    );
}

export default Menu;
