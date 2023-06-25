import Form from "../components/form-order";
import FormForCandlesNotes from "../components/form-order-candle-and-notes";
import s from "../styles/onlineServices.module.scss";


const OnlineService = () => {

  return (
    <section className={s.online_service}>
      <p className={s.online_service__text}>Коли 24 лютого почалось повномасштабне вторгнення росії в Україну, понад 10 мільйонів українців рушили до кордону, аби потрапити в безпечну країну. Завдяки нашому сервісу, православні віряни можуть поставити свічку або ж подати записки за упокій та за здоров’я або подати запит на інші церковні послуги.</p>
      <h1 className={s.online_service__title}>Поставити свічку</h1>
      <FormForCandlesNotes type={'candles'} />
      <h2 className={s.online_service__title}>Записки за здоров`я та за упокій</h2>
      <FormForCandlesNotes type={'notes'} />
      <h2 className={s.online_service__title}>Якщо Вам потрібна інша допомога священика, Ви можете залишити повідомлення</h2>
      <Form />
    </section>
  );
};

export default OnlineService;
