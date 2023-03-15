import capaLivro from "../../public/2.png";
import Image from "next/image";

interface Props {
  title?: string;
  autor?: string;
  price?: number;
  color?: boolean;
  liimgWidth?: boolean;
}

const Card = ({ title, autor, price, color, imgWidth }: Props) => {
  return (
    <>
      <div
        className={`m-4 flex flex-col flex-wrap `}
      >
        <div className="flex flex-wrap">
          <Image
            src={capaLivro}
            className={`h-[160px] w-[110px] md:h-[260px] md:w-[210px] lg:h-[381px] lg:w-[261px]
            ${imgWidth ? "h-[381px] lg:w-[261px]" : "h-[360px] lg:w-[520px]"} `}
            alt="capaLivro"
          ></Image>
        </div>
        <p
          className={`title mt-3  text-[18px] ${
            color ? "text-white" : "text-black"
          } `}
        >
          {title}
        </p>
        <p
          className={`author mt-3 text-[22px] ${
            color ? "text-white" : "text-black"
          } `}
        >
          {autor}
        </p>
        <p className="price text-[20px] text-[#FF4E16]">{price}</p>
      </div>
    </>
  );
};

export default Card;
