import { useEffect } from 'react'
import Form from "../components/form-order";
import ButtonCircle from "../components/button-circle";
import s from "../styles/modal.module.scss";


const Modal = ({ onClose }) => {

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);


  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleButtonClick = () => {
    onClose();
  };

  return (
    <div className={s.backdrop} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <ButtonCircle theme={'close'} type={'button'} onClick={handleButtonClick} />
        <p className={s.modal__title}>Leave your details, we will call you back</p>
        <Form onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;
