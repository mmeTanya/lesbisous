import Link from "next/link";
import { useRouter } from "next/router";
import s from "../styles/header.module.scss";

const NavLinks = [
  { id: 1, title: "ACCUEIL", path: "/" },
  { id: 2, title: "LA CARTE", path: "/carte" },
  { id: 3, title: "L'ADRESSE", path: "/adresse" },
];

const Nav = () => {
  const router = useRouter();

  return (
    <div className={s.container}>
      <ul className={s.social_list}>
        <li className={s.social_list__social_item}>
          <a className={s.social_list__instagram} href="https://www.instagram.com/" />
        </li>
        <li className={s.social_list__social_item}>
          <a className={s.social_list__twitter} href="https://twitter.com/" />
        </li>
        <li className={s.social_list__social_item}>
          <a className={s.social_list__facebook} href="https://www.facebook.com/" />
        </li>
        <li className={s.social_list__social_item}>
          <a className={s.social_list__linkedin} href="https://www.linkedin.com/" />
        </li>
      </ul>
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

export default Nav;
