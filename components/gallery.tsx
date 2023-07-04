import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from '../components/loader';
import { Bounce } from "react-awesome-reveal"
import s from "../styles/gallery.module.scss";

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Gallery = () => {
  const [images, setImages] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    onLoadImages()
  }, []);

  const onLoadImages = async () => {
    try {
      const response = await fetch('/api/gallery')
      setStatus(Status.PENDING)
      const result = await response.json()
      if (result.gallery.length === 0) {
        setStatus(Status.REJECTED)
        return
      }
      setImages(result.gallery)
      console.log(images)
      setStatus(Status.RESOLVED)
    }
    catch {
      setStatus(Status.REJECTED)
    }
  }

  return (
    <section className={s.gallery}>
      <h1 className={s.gallery__title}>
        Le Restaurant
      </h1>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <div className={s.gallery__list}>
        {images && images.map(item =>
          <Bounce key={uuidv1()} className={s.gallery__item}>
            <img src={item.src} alt='image' className={s.gallery__img} />
          </Bounce>
        )}
      </div>
      }
    </section>
  );
};

export default Gallery;
