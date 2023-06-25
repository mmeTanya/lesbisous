import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader'
import s from "../styles/donation.module.scss";
import Button from "../components/button";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Donation = () => {

  const [donation, setDonation] = useState([])
  const [page, setPage] = useState(2)
  const [status, setStatus] = useState(Status.IDLE);
  const [showButton, setShowButton] = useState(false);


  useEffect(() => {
    onloadDonation()
  }, []);

  const onloadDonation = async () => {
    try {
      const response = await fetch('/api/donation')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.donation.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      const firstPage = result.donation.slice(0, 7)
      setDonation(firstPage)
      console.log(donation)
      setStatus(Status.RESOLVED)
      if (result.donation.length > 7) {
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
      const response = await fetch('/api/donation')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.donation.length === 0) {
        return
      }
      const nextPage = result.donation.slice(7 * page - 7, 7 * page)
      setDonation([...donation, ...nextPage])
      console.log(donation)
      setStatus(Status.RESOLVED)
      if (page >= Math.ceil(result.donation.length / 7)) {
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
    <section className={s.donation} >
      <h1 className={s.donation__title}>
      Donation
      </h1>
      {status === Status.PENDING && <Loader />}
      {status === Status.REJECTED && <p className={s.donation_item__text}>На даний час інформація відсутня</p>}
      {status === Status.RESOLVED &&
        <ul>
          {donation && donation.map(item =>
          (<li key={uuidv1()} className={s.donation_item}>
            {item.title && <h2 className={s.donation_item__title}>{item.title}</h2>}
            <div className={s.donation_item__img_cover}>
              {item.image && item.image.map(el => (<img key={uuidv1()} src={el.src} alt='image' className={s.donation_item__img} />))}
            </div>
            {item.text && item.text.map(el => (<p key={uuidv1()} className={s.donation_item__text}>{el.p}</p>))}
            {item.link && item.link.map(el => (<a key={uuidv1()} href={el.href} className={s.donation_item__link}>{el.p}</a>))}
            {item.date && <p className={s.donation_item__date}>{item.date}</p>}
          </li>)
          )}
        </ul>
      }
      {showButton && <Button theme={'no_animate'} onClick={onLoadNext} type={'button'} text={'Завантажити ще'} />}
    </section>
  );
};

export default Donation;
