import style from "./MButton.module.css";

const Button = ({ children, type }) => (
  <button className={style.btn} type={type}>
    {children}
  </button>
);

export default Button;
