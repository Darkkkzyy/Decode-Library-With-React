import { useState } from 'react';
import { CategoriesMocks } from "../mocks/categories";

type DropdownProps = {
  items: [];
};


const Dropdown = ({ items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-center items-center flex-col">
      <button
        className="flex justify-between  bg-white rounded-[100px] text-[#AAAAAA] font-semibold py-2 px-4   items-center w-[300px]"
        onClick={toggle}
      >
        
        <span>{isOpen ? 'Fechar' : 'Escolher Categoria'}</span>
     
        <svg
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } w-4 h-4 ml-2`}
          viewBox="0 0 20 20"
          fill="#FF4E16"
        >
          <path
            fillRule="evenodd"
            d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className=" right-0 mt-2 py-2 w-[300px] bg-white rounded-md shadow-xl z-50">
          {CategoriesMocks.map((item) => (
            <a
              key={item.id}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.categories}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default Dropdown;
