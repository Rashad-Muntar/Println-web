interface Props {
    type?: "button" | "submit" | "reset";
    text: any;
    onClick?: () => void;
    disabled?: boolean;
    style?:string
  }
  
  const Button = ({ type, text, onClick, disabled, style }: Props) => {
    return (
      <button className={`px-[10px] py-[12px] rounded-lg ${style}`} type={type} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    );
  };
  
  export default Button;