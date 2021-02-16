import React from 'react';
import styles from "./navbar.module.css";
import {NavLink} from 'react-router-dom';

type NavbarType = {
    title: string
    href: string
};

export const Navbar: React.FC = () => {
    const navbarLinks: NavbarType[] = [
        {title: "Profile", href: "/profile"},
        {title: "Messages", href: "/dialogs"},
        {title: "Users", href: "/users"},
        {title: "News", href: "/news"},
        {title: "Music", href: "/music"},
        {title: "Settings", href: "/settings"}
    ];

    return (
        <nav className={styles.navbar}>
            <ul>
                {
                    navbarLinks.map(i => {
                        return (
                            <NavLink key={i.title}
                                     to={i.href}
                                     activeClassName={styles.active}
                            >
                                <li className={styles.navbar_link}>
                                    {i.title}
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </nav>
    )
};
