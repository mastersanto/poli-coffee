import "./button.css";

type ButtonProps = {
  text: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { text, onClick } = props;

  return (
    <button type="button" className="button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
