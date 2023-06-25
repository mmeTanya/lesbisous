import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from './loader'
import Button from "./button";
import s from "../styles/molytvy.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Molytvy = () => {
  const [molytvy, setMolytvy] = useState([])
  const [page, setPage] = useState(2)
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    onloadMolytvy()
  }, []);

  const onloadMolytvy = async () => {
    try {
      const response = await fetch('/api/molytovnyk')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.molytvy.length === 0) {
        return
      }
      const firstPage = result.molytvy.slice(0, 7)
      setMolytvy(firstPage)
      console.log(molytvy)
      setStatus(Status.RESOLVED)
      if (result.molytvy.length > 7) {
        setShowButton(true)
      }
      console.log(page)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  const onLoadNext = async () => {
    setShowButton(false)
    setPage((prevState) => prevState + 1)
    console.log(page)
    try {
      const response = await fetch('/api/molytovnyk')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.molytvy.length === 0) {
        return
      }
      const nextPage = result.molytvy.slice(7 * page - 7, 7 * page)
      setMolytvy([...molytvy, ...nextPage])
      console.log(molytvy)
      setStatus(Status.RESOLVED)
      if (page >= Math.ceil(result.molytvy.length / 7)) {
        setShowButton(false);
      } else {
        setShowButton(true)
      }
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }


  return (
    <section className={s.molytvy} >
      <h2 className={s.molytvy__title}>
      molytvy
      </h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED &&
        <ul>
          {molytvy && molytvy.map(item =>
          (<li key={uuidv1()} className={s.molytvy_item}>
            {item.title && <h2 className={s.molytvy_item__title}>{item.title}</h2>}
            <div className={s.molytvy_item__img_cover}>
              {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.molytvy_item__img} />))}
            </div>
            {item.text && item.text.map(el => (<p key={uuidv1()} className={s.molytvy_item__text}>{el.p}</p>))}
            {item.date && <p className={s.molytvy_item__date}>{item.date}</p>}
          </li>)
          )}
        </ul>
      }
      {showButton && <Button theme={'no_animate'} onClick={onLoadNext} type={'button'} text={'Завантажити ще'} />}
    </section>
  );
};

export default Molytvy;
