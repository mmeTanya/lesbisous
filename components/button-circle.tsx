import s from '/styles/button-circle.module.scss';

let className = ''
const getStyledButton = (theme: any) => {
  switch (theme) {
    case 'close':
      className = s.close
      return
    case 'menu':
      className = s.menu
      return
    case 'goToTop':
      className = s.goToTop
      return
    default:
      return {};
  }
};

const ButtonCircle = ({ theme, onClick, type }) => {

  getStyledButton(theme)

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
    </button>
  );
};

export default ButtonCircle;