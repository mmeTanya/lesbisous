import s from "../styles/footer.module.scss";

const Footer = () => {

  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__title_overlay}>
          <h1 className={s.footer__title}>Les Bisous</h1>
          <img src='/kisses.png' alt='image' className={s.footer__title_img} />
        </div>
        <a href="https://goo.gl/maps/5tnEeTojWkb5GDk6A" className={s.footer__contact_link}>
          <p>59 Quai Henri IV</p>
          <p>76200 Dieppe</p>
        </a>
      </div>
    </footer>

  );
};

export default Footer;
