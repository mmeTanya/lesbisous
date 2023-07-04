import Nav from "./nav";
import s from "../styles/header.module.scss";

const Header = () => {

  return (
    <header className={s.page_header}>
       <Nav />
    </header>
  );
};

export default Header;
