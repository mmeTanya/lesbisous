import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import Button from "../components/button";
import s from "../styles/aboutServices.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const AboutServices = () => {
  const [services, setServices] = useState([])
  const [page, setPage] = useState(2)
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    onloadServices()
  }, []);

  const onloadServices = async () => {
    try {
      const response = await fetch('/api/info-services')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.services.length === 0){
        setStatus(Status.REJECTED)
        return
      }
      const firstPage = result.services.slice(0, 7)
      setServices(firstPage)
      console.log(services)
      setStatus(Status.RESOLVED)
      if (result.services.length > 7) {
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
      const response = await fetch('/api/info-services')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.services.length === 0){
        return
      }
      const nextPage = result.services.slice(7 * page - 7, 7 * page)
      setServices([...services, ...nextPage])
      console.log(services)
      setStatus(Status.RESOLVED)
      if (page >= Math.ceil(result.services.length / 7)) {
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
    <section className={s.services} >
      <h2 className={s.services__title}>
      Services
      </h2>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <p className={s.services_item__text}>На даний час інформація відсутня</p>}
      {status === Status.RESOLVED &&
        <ul>
          {services && services.map(item =>
          (<li key={uuidv1()} className={s.services_item}>
            {item.title && <h2 className={s.services_item__title}>{item.title}</h2>}
            <div className={s.services_item__img_cover}>
              {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.services_item__img} />))}
            </div>
            {item.text && item.text.map(el => (<p key={uuidv1()} className={s.services_item__text}>{el.p}</p>))}
            {item.date && <p className={s.services_item__date}>{item.date}</p>}
          </li>)
          )}
        </ul>
      }
      {showButton && <Button theme={'no_animate'} onClick={onLoadNext} type={'button'} text={'Завантажити ще'} />}
    </section>
  );
};

export default AboutServices;
