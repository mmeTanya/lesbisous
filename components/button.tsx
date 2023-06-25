import s from '/styles/button.module.scss';

let className = ''
const getStyledButton = theme => {
  switch (theme) {
    case 'animate':
      className = s.animate
      return
    case 'no_animate':
      className = s.no_animate
      return
    case 'active':
      className = s.active
      return
      case 'active_animate':
      className = s.active_animate
      return
    default:
      return {};
  }
};

const Button = ({ text, theme, onClick, type }) => {

  getStyledButton(theme)

  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;