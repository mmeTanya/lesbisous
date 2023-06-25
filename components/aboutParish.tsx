import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader';
import VerticalCarousel from './menu';
import { config } from "react-spring";
import s from "../styles/aboutParish.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const AboutParish = () => {
  const [info, setInfo] = useState([])
  const [status, setStatus] = useState(Status.IDLE);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true)
  const [confiG, setConfig] = useState(config.gentle);


  useEffect(() => {
    onLoadInfo()
  }, []);

  const onLoadInfo = async () => {
    try {
      const response = await fetch('/api/info-parish')
      setStatus(Status.PENDING)
      console.log(info)
      const result = await response.json()
      if (result.info.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setInfo(result.info)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }


  return (
    <section className={s.parish} >
      <div className={s.parish__text_cover}>
        <h1 className={s.parish__title}>
        Свято-Вознесенська парафія, Українська православна церква Київського Патріархату
        </h1>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <p className={s.parish__text}>На даний час інформація відсутня</p>}
        {status === Status.RESOLVED && <div>
          {info && info.map(item => <div key={uuidv1()}>
            {item.text && item.text.map(el => <p key={uuidv1()} className={s.parish__text}>{el.p}</p>
            )}</div>)}
        </div>
        }
      </div>
      <div className={s.parish__img_cover}>
        {status === Status.PENDING && <Loader />}
        {status === Status.REJECTED && <p className={s.parish__text}>На даний час інформація відсутня</p>}
        {status === Status.RESOLVED && <div  >
          {info && info.map(item => <div key={uuidv1()} className={s.parish__wrapper_container} >
              <VerticalCarousel
                key={uuidv1()}
                slides={item.image}
                offsetRadius={offsetRadius}
                showNavigation={showNavigation}
                animationConfig={confiG}
              />
          </div>)}
        </div>
        }
      </div>
    </section>
  );
};

export default AboutParish;
