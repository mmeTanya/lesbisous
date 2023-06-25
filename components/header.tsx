import Nav from "./nav";
import MobileNav from "./mobile-nav";
import { useMediaQuery } from "react-responsive";
import s from "../styles/header.module.scss";

const Header = () => {
  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  return (
    <header className={s.page_header}>
      {isNotMobile ? <Nav /> : <MobileNav />}
    </header>
  );
};

export default Header;
