import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  width?:boolean;
  tranparent?: boolean;
  visibility?:boolean;
}

const Button = ({ children, tranparent,width,visibility }: Props) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`h-[43px] w-[360px] rounded-full ${tranparent  ? "border border-white bg-transparent" : "bg-[#FF4E16]  hover:bg-orange-700" } py-2 px-4 font-bold text-white
        ${
          width
            ? "h-[43px] w-[360px]"
            : "h-[43px] w-[76px]"
        }
        ${
          visibility
            ? "sm:flex"
            : "md:hidden"
        }
        
        `}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
