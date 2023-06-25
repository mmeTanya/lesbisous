import Link from "next/link";
import { Fade } from "react-awesome-reveal"
import s from "../styles/hero.module.scss";



const Hero = () => {

  return (
    <section className={s.hero}>
      <div className={s.hero__title_overlay}>
        <h1 className={s.hero__title}>Les Bisous</h1>
        <img src='/kisses.png' alt='image' className={s.hero__title_img} />
        <Fade  cascade damping={1e-1} delay={1000} triggerOnce={true} duration={1000}  className={s.hero__welcome}>
        Bienvenue au notre restaurant
        </Fade>
      </div>
      <div className={s.hero__overlay}>
        <img src='/restorante.jpg' alt='image' className={s.hero__img} />
        <div className={s.hero__link_overlay}>
          <Link legacyBehavior href="/reserve">
            <a id="link" className={s.hero__link}>
              Réservez maintenant
            </a>
          </Link>
        </div>
      </div>
     <p className={s.hero__text}>Les bisous est un élégant restaurant gastronomique qui met l'accent sur les aliments naturels et durables, provenant des agriculteurs et producteurs alimentaires les plus dévoués de La France. Nous créons des plats magnifiquement élaborés, recherchant le meilleur des produits britanniques, avec une passion pour ravir et partager notre curiosité et notre amour de la délicieuse cuisine artisanale.</p>
    </section>
  );
};

export default Hero;
