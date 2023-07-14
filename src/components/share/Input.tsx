import { ChangeEvent } from "react";

interface Props {
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  name?: string;
  value: string;
}
const Input = ({ type, onChange, onBlur, name, value, placeholder }: Props) => {
  return (
    <input
    placeholder={placeholder}
      type={type}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      className="border-2 text-black border-gray-300 rounded-lg p-2 w-[100%] mb-2"
    />
  );
};

export default Input;