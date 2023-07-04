import { Fade } from "react-awesome-reveal"
import s from "../styles/logo.module.scss";



const Logo = () => {

  return (
      <div className={s.logo}>
        <h1 className={s.logo__title}>Les Bisous</h1>
        <img src='/kisses.png' alt='image' className={s.logo__img} />
        <Fade  cascade damping={1e-1} delay={1000} triggerOnce={true} duration={1000}  className={s.logo__welcome}>
        Bienvenue au notre restaurant
        </Fade>
      </div>
  );
};

export default Logo;
