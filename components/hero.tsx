import { useState } from "react";
import ClientOnlyPortal from './clientOnlyPortal'
import Logo from "../components/logo";
import Button from "../components/button";
import Modal from "../components/modal";
import s from "../styles/hero.module.scss";



const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className={s.hero}>
      <Logo />
      <div className={s.hero__overlay}>
        <img src='/restorante.jpg' alt='image' className={s.hero__img} />
        <div className={s.hero__link_overlay}>
          <Button theme={'reserve'} className={s.hero__link} onClick={handleOpenModal} type={'button'} text={'Réservez maintenant'} />
          {showModal && <ClientOnlyPortal selector="#modal"><Modal onClose={handleCloseModal} /></ClientOnlyPortal>}
        </div>
      </div>
      <p className={s.hero__text}>Les bisous est un élégant restaurant gastronomique qui met l'accent sur les aliments naturels et durables, provenant des agriculteurs et producteurs alimentaires les plus dévoués de La France. Nous créons des plats magnifiquement élaborés, recherchant le meilleur des produits britanniques, avec une passion pour ravir et partager notre curiosité et notre amour de la délicieuse cuisine artisanale.</p>
    </section>
  );
};

export default Hero;
