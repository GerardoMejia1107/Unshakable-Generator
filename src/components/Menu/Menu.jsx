/* eslint-disable react/prop-types */
import "./styles.css";

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

function Menu() {
    return (
        <nav className="navbar">
            <ul>
                {menuItems.map((item, index) => {
                    return <MenuItem key={index} item={item} />;
                })}
            </ul>
        </nav>
    );
}

function MenuItem({ item }) {
    return (
        <li className="menu__item">
            <a href={item.link}>
                {item.icon && <i className={item.icon}></i>} {item.label}
            </a>

            {item.submenu && (
                <ul className="dropdown">
                    {item.submenu.map((subitem, index) => {
                        return (
                            <li key={index} className="dropdown__item">
                                <a href={subitem.link}>
                                    <div className="dropdown__item__content">
                                        {subitem.description && (
                                            <>
                                                <h4>{subitem.label}</h4>
                                                <p>{subitem.description}</p>
                                            </>
                                        )}
                                        {<i className={subitem.icon}></i>}
                                        {subitem.label}
                                    </div>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </li>
    );
}

export default Menu;
