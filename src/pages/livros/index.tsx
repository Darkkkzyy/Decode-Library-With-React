import plusimg from "../../../public/image.png";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import { BsPlusSquare } from "react-icons/bs";
import Input from "antd/es/input";
import Image from "next/image";
import Card from "~/components/card";
import Button from "~/components/button";

const Livros = () => {
  return (
    <>
      <Navbar />
      {/* container principal */}
      <div className="flex h-screen w-full flex-col items-center ">
        {/* top */}
        <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="m-10 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:text-6xl sm:self-start">
            A nossa biblioteca
          </h1>
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
              className="mb-5 rounded-3xl bg-[#FFFFFF3F]"
              defaultValue="Pesquise um Livro"
            />
          </div>
        </div>
        {/* Button add Livro */}
        <Button width tranparent>
            <span className="flex justify-center items-center gap-5"><BsPlusSquare/>Adicionar Livro</span>
            
          </Button>
        <div className="flex flex-row flex-wrap items-center justify-center ">
        
          <div className="hidden h-[480px] flex-col md:mr-[24px] md:flex ">
            <button className=" mb-3 flex  h-[381px] w-[261px] items-center justify-center border">
              <Image src={plusimg} className="w-[38px]" alt="plus icon"></Image>
            </button>
            <p className="addBook mt-3">Adicionar um livro</p>
          </div>
          {/* Books */}
            <Card/>
            <Card/>
            <Card/>
        </div>
      </div>
    </>
  );
};

export default Livros;
