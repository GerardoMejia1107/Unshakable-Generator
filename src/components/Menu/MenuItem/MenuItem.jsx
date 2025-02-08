/* eslint-disable react/prop-types */

import SubMenuItem from "../SubMenuItem/SubMenuItem.jsx";

function MenuItem({ item }) {
    return (
        <li className="menu__item">
            <a href={item.link}>
                {item.icon && <i className={item.icon}></i>} {item.label}
            </a>

            {item.submenu && (
                <ul className="dropdown">
                    {item.submenu.map((subitem, index) => {
                        return <SubMenuItem key={index} subitem={subitem} />;
                    })}
                </ul>
            )}
        </li>
    );
}

export default MenuItem;
