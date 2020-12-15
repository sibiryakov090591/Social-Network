import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from "./people.module.css";

type PeopleType = {
    name: string
    href: string
}

export function People() {
    const people: Array<PeopleType> = [
        {name: "Anna", href: "/Anna"},
        {name: "Andrey", href: "/Andrey"},
        {name: "John", href: "/John"},
        {name: "Tatiana", href: "/Tatiana"},
        {name: "Alex", href: "/Alex"},
        {name: "Dima", href: "/Dima"},
        {name: "Lio", href: "/Lio"}
    ]

    return (
        <div>
            {
                people.map(p => {
                    return (
                        <div>
                            <img className={styles.avatar} src="ava.jpg" alt="avatar"/>
                            <NavLink className={styles.dialog} activeClassName={styles.active_dialog} to={p.href}>
                                {p.name}
                            </NavLink>
                        </div>
                    )
                })
            }
        </div>
    )
}