import s from '../styles/welcome.module.scss'

const Welcome = () => {
  return (
    <div className={s.welcome}>
      <h1 className={s.welcome__title}>Слава Ісусу Христу! </h1>
      <p className={s.welcome__text}>Вітаємо Вас на веб-сторінці Свято-Вознесенського храму Української православної церкви Київського Патріархату</p>
      <p className={s.welcome__text}>Ми сподіваємося, що ця веб-сторінка допоможе Вам знайти відповіді на Ваші питання та надасть Вам всю необхідну інформацію про нашу парафію та нашу Церкву.</p>
    </div>
  )
}

export default Welcome



