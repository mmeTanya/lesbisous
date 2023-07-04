import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader';
import s from "../styles/laCarte.module.scss";


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Entrees = () => {
  const [dishes, setDishes] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    onLoadDishes()
  }, []);

  const onLoadDishes = async () => {
    try {
      const response = await fetch('/api/ENTREES')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.dishes.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setDishes(result.dishes)
      console.log(dishes)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.dishes}>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <div className={s.dishes__list}>
        {dishes && dishes.map(item =>
          <div key={uuidv1()} className={s.dishes__item}>
            <p className={s.dishes__text} >{item.p}</p>
            <p className={s.dishes__price} >{item.price}</p>
          </div>
        )}
      </div>
      }
    </section>
  );
};

export default Entrees;