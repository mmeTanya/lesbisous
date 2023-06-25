import React, { useState, useEffect } from 'react';
import ButtonCircle from "../components/button-circle";


const GoUp = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.onscroll = scrollFunction
  }, []);

  const scrollFunction = () => {
    if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
      setShowButton(true)
    } else {
      setShowButton(false)
    }
  }

  const onClick =  () => {
    window.scroll({
      left: 0,
      top: 0,
      behavior: 'smooth'
    });
      }

  return (
    <div className="goUp">
      {showButton && <ButtonCircle theme={'goToTop'} onClick={onClick} type={'button'} text={''} />}
    </div>
  );
};

export default GoUp;
