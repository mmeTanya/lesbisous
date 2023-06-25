import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import ButtonCircle from "../components/button-circle";
import s from "../styles/header.module.scss";



const NavLinks = [
  { id: 1, title: "ACCUEIL", path: "/" },
  { id: 2, title: "LA CARTE", path: "/carte" },
  { id: 3, title: "LES AVIS", path: "/avis" },
];

const MobileNav = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <nav className={s.nav}>
        <ul className={s.nav__list}>
          {NavLinks.map((NavLink) => (
            <li className={s.nav__item} key={NavLink.id}>
              <Link legacyBehavior href={NavLink.path}>
                <a id="link"
                  className={
                    router.pathname === NavLink.path
                      ? s.nav_active_link
                      : s.nav__link
                  }
                >
                  {NavLink.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default MobileNav;
