import React, { useState, useEffect } from 'react';
import { v1 as uuidv1 } from 'uuid';
import Entrees from './ENTREES'
import Plats from './PLATS'
import Desserts from './DESSERTS'
import s from "../styles/laCarte.module.scss";


const LaCarte = () => {

  return (
    <section className={s.laCarte} >
      <h2 className={s.laCarte__title}>
        Entrees
      </h2>
      <Entrees />
      <h2 className={s.laCarte__title}>
        Plats
      </h2>
      <Plats />
      <h2 className={s.laCarte__title}>
        Desserts
      </h2>
      <Desserts />
    </section>
  );
};

export default LaCarte;
