import { FaSearch } from "react-icons/fa";

interface Props {
  label: string;
  showIcon?:boolean;
}

const Input = ({ label, showIcon }: Props) => {
  return (
    <>
      <div>
        <input
          className="m-[10px] h-[46px] w-[360px] rounded-[100px] border-2 p-5 "
          placeholder={label}
        />
        {/* Se showIcon for true, o ícone será exibido. */}
      {showIcon && <FaSearch className="icon "  />}
      </div>
    </>
  );
};

export default Input;
