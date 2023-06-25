import React from "react";
import { Spring } from "react-spring";
import { withGesture } from "react-with-gesture";
import { v1 as uuidv1 } from 'uuid';
import s from "../styles/aboutParish.module.scss";


const  Slide =({ content, offsetRadius, index, animationConfig, moveSlide, delta, down }) => {
  const offsetFromMiddle = index - offsetRadius;
  const totalPresentables = 2 * offsetRadius + 1;
  const distanceFactor = 1 - Math.abs(offsetFromMiddle / (offsetRadius + 1));

  const offsetCardClick = i => {
    console.log(i);
  };

  const translateYoffset =
    50 * (Math.abs(offsetFromMiddle) / (offsetRadius + 1));
  let translateY = -50;

  if (offsetRadius !== 0) {
    if (index === 0) {
      translateY = 0;
    } else if (index === totalPresentables - 1) {
      translateY = -100;
    }
  }

  if (offsetFromMiddle === 0 && down) {
    translateY += delta[1] / (offsetRadius + 1);
    if (translateY > -40) {
      moveSlide(-1);
    }
    if (translateY < -100) {
      moveSlide(1);
    }
  }
  if (offsetFromMiddle > 0) {
    translateY += translateYoffset;
  } else if (offsetFromMiddle < 0) {
    translateY -= translateYoffset;
  }

  return (
    <Spring
      to={{
        transform: `translateX(0%) translateY(${translateY}%) scale(${distanceFactor})`,
        top: `${offsetRadius === 0 ? 50 : 50 + (offsetFromMiddle * 50) / offsetRadius
          }%`,
        opacity: distanceFactor * distanceFactor
      }}
      config={animationConfig}
    >
      {style => (
        <div style={{
          ...style,
          zIndex: Math.abs(Math.abs(offsetFromMiddle) - 2)
        }} className={s.parish__slideContainer}>
          <img
            key={uuidv1()}
            src={content}
            alt='image'
            onClick={() => moveSlide(offsetFromMiddle)}
            className={s.parish__img}
          />
        </div>
      )}
    </Spring>
  );
}

export default withGesture()(Slide);