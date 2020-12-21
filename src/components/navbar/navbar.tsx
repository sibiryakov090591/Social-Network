import React from 'react';
import styles from "./navbar.module.css";
import { NavLink } from 'react-router-dom';

type NavbarType = {
    title: string
    href: string
}

export function Navbar() {
    const navbarLinks: Array<NavbarType> = [
        {title: "Profile", href: "/profile"},
        {title: "Messages", href: "/dialogs"},
        {title: "News", href: "/news"},
        {title: "Music", href: "/music"},
        {title: "Settings", href: "/settings"}
    ]

    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    navbarLinks.map(item => {
                        return (
                            <NavLink to={item.href}>
                                <li className={styles.navbar_link} id="nav-link">
                                    {item.title}
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </nav>
    )
}