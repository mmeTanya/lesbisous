import React, { useState, useEffect } from 'react';
import Slide from "./slide";
import { v1 as uuidv1 } from 'uuid';
import s from "../styles/aboutParish.module.scss";

const mod = (a, b) => {
  return ((a % b) + b) % b;
}

const VerticalCarousel = ({slides, offsetRadius, showNavigation, animationConfig}) => {

  const [index, setIndex] = useState(0)
  const [goToSlide, setGoToSlide] = useState(null)
  const [prevPropsGoToSlide, setPrevPropsGoToSlide] = useState(0);
  const [newSlide, setNewSlide] = useState(false)

  useEffect(() => {
    document.addEventListener("keydown", event => {
      if (event.isComposing || event.keyCode === 229) {
        return;
      }
      if (event.keyCode === 38) {
        moveSlide(-1);
      }
      if (event.keyCode === 40) {
        moveSlide(1);
      }
    });
  }, []);
 


  const modBySlidesLength = index => {
    return mod(index, slides.length);
  };

  const moveSlide = direction => {
    setIndex(modBySlidesLength(index + direction))
    setGoToSlide(null)
  };

  const clampOffsetRadius = (offsetRadius) => {

    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }
    return offsetRadius;
  }

  const getPresentableSlides = () => {
    offsetRadius = clampOffsetRadius(offsetRadius);
    const presentableSlides = new Array();

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

    return (
      <div>
        <div className={s.parish__wrapper}>

          {getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={uuidv1()}
              content={slide.src}
              moveSlide={moveSlide}
              offsetRadius={clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}

        </div>
        {
          showNavigation && <div className={s.parish__navigationButtons}>
            <div onClick={() => moveSlide(1)} className={s.parish__navBtn}>&#8593;</div>
            <div onClick={() => moveSlide(-1)} className={s.parish__navBtn}>&#8595;</div>
          </div>
        }
      </div>
    );
}

export default VerticalCarousel;