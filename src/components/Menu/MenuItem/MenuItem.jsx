/* eslint-disable react/prop-types */

import SubMenuItem from "../SubMenuItem/SubMenuItem.jsx";
import { useState, useEffect } from "react";

function MenuItem({ item, menuVisibility }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!menuVisibility) {
            setIsOpen(false);
        }
    }, [menuVisibility]);

    function toggleDropdown() {
        if (item.submenu) {
            setIsOpen((isOpen) => !isOpen);
        }
    }
    return (
        <li
            className={`menu__item ${item.submenu && isOpen ? "open" : ""} `}
            onClick={toggleDropdown}
        >
            <a href={item.link}>
                {item.icon && <i className={item.icon}></i>} {item.label}
            </a>

            {item.submenu && (
                <ul className={`dropdown `}>
                    {item.submenu.map((subitem) => (
                        <SubMenuItem key={subitem.label} subitem={subitem} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default MenuItem;
