import "./button.css";

type ButtonProps = {
  className?: string;
  text: string;
  onClick?: any;
};

const Button = (props: ButtonProps) => {
  const { className, text, onClick } = props;

  return (
    <button
      type="button"
      className={`button ${className ? className : ""}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
