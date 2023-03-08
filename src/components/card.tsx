import capaLivro from "../../public/2.png";
import Image from "next/image";
import type { ReactNode } from "react";


interface Props {
  children: ReactNode;
  title?:string;
  autor?:string;
  price?:number;
  color?:boolean;
}


const Card = ({ title, autor, price, color}:Props) => {
  return (
    <>
    <div className="flex flex-col flex-wrap m-10 ">
      
            <div>
              <Image
                src={capaLivro}
                className="h-[160px] w-[110px] md:h-[381px] md:w-[261px]"
                alt="capaLivro"
              ></Image>
            </div>
            <p className= {`title mb-3  text-[18px] ${color?"text-white":"text-black"} `} >{title}</p>
            <p className= {`author mb-3 text-[22px] ${color?"text-white":"text-black"} `}>{autor}</p>
            <p className="price text-[20px] text-[#FF4E16]">{price}</p>
          </div>
    </>
  );
};

export default Card;
