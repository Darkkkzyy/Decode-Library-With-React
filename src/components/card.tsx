import capaLivro from "../../public/2.png";
import Image from "next/image";

const Card = () => {
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
            <p className="title mb-3 text-[14px] text-white">War Peace</p>
            <p className="author mb-3 text-[16px] text-white ">Leo Tolstoy</p>
            <p className="price text-[20px] text-[#FF4E16]">2€/semana</p>
          </div>
    </>
  );
};

export default Card;
