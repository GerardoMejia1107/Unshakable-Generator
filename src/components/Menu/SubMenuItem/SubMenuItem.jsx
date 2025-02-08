/* eslint-disable react/prop-types */
function SubMenuItem({ subitem }) {
    return (
        <li className="dropdown__item">
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
}
export default SubMenuItem;
