import Image from "next/image";
import plusimg from "../../../public/image.png";
import capaLivro from "../../../public/2.png";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import Input from "antd/es/input";
import Link from "next/link";
import { useState } from "react";

const Livros = () => {
  const [clickedBook, setClickedBook] = useState("");
  return (
    <>
      <Navbar />
      {/* container principal */}
      <div className="flex h-screen w-full flex-col items-center ">
       {/* top */}
        <div className="flex flex-col items-center justify-center w-[80%]">
          <h1 className="m-10 text-6xl self-start  whitespace-nowrap text-white sm:mt-[50px] text-3xl">A nossa biblioteca</h1>
          {/* searchContainer */}
          <div className="border-none">
            <Input
            size="large"
              bordered={false}
              allowClear
              addonBefore={
                <span className="border-none">
                  <FaSearch />
                </span>
              }
              className="rounded-3xl bg-[#FFFFFF3F] mb-5"
              defaultValue="Pesquise um Livro"
            />
          </div>
        </div>
        {/* Books */}
        <div className="flex flex-row flex-wrap justify-center items-center">
          <div className="hidden md:mr-[24px] md:flex h-[480px] flex-col ">
            <button className=" mb-3 flex  h-[381px] w-[261px] items-center justify-center border">
              <Image src={plusimg} className="w-[38px]" alt="plus icon"></Image>
            </button>
            <p className="addBook mt-3">Adicionar um livro</p>
          </div>

          <div className="Library_book">
            <Link href={clickedBook}>
              <Image
                onClick={() => setClickedBook("war-peace")}
                src={capaLivro}
                className="h-[160px] w-[110px] md:h-[381px] md:w-[261px]"
                alt="capaLivro"
              ></Image>
            </Link>
            <p className="title mb-3 text-[14px] text-white">War Peace</p>
            <p className="author mb-3 text-[16px] text-white ">Leo Tolstoy</p>
            <p className="price text-[20px] text-[#FF4E16]">2€/semana</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Livros;
