import { FaSearch } from "react-icons/fa";

interface Props {
  label: string;
  showIcon?: boolean;
  name:string;
  tipo:string;
}

const Input = ({ label, showIcon,name,tipo }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center">
        <input name={name} type={tipo} 
          className="m-[10px] h-[46px] w-[360px] rounded-[100px] border-2 p-5 "
          placeholder={label}
        />
        {/* Se showIcon for true, o ícone será exibido. */}
        {showIcon && (
          <FaSearch className="absolute  m-3 inline-block text-gray-500" />
        )}
      </div>
    </>
  );
};

export default Input;
