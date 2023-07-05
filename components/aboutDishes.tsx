import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Loader from './loader';
import { Fade } from "react-awesome-reveal"
import s from "../styles/about.module.scss";

const divStyle = {
  whiteSpace: 'break-spaces',
  display: 'block'
}

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const About = () => {

  const [images, setImages] = useState([])
  const [status, setStatus] = useState(Status.IDLE);


  useEffect(() => {
    onLoadImages()
  }, []);

  const onLoadImages = async () => {
    try {
      const response = await fetch('/api/gallery-dishes')
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
    <section className={s.about}>
      <Fade delay={1000} cascade damping={1e-1} triggerOnce={true} duration={300} style={divStyle} className={s.about__text}>
        Nos aliments dépendent fortement des produits locaux. Les pommes fraîches, les baies, les haricots verts, les poireaux, les champignons, diverses courges et les fruits à noyau font partie des produits les plus couramment utilisés. La volaille, le bœuf, l'agneau et le veau sont facilement disponibles toute l'année. La viande de gibier est particulièrement appréciée et abondante pendant la saison de chasse qui s'étend du début de l'automne à février. Peu importe la région, la France regorge de fromages et de vins artisanaux.
      </Fade>
      {status === Status.PENDING && <Loader />}
      {status === Status.RESOLVED && <div className={s.gallery}>
        {images && images.map(item =>
          <img key={uuidv1()} className={s.clipped_img} src={item.src} alt='image' id="clipped" />
        )}
      </div>
      }
    </section>
  );
};

export default About;
