import plusimg from "../../../public/image.png";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import Button from "~/components/button";
import Card from "~/components/card";
import { Input } from "antd";
import Link from "next/link";
import { BooksMocks } from "../../mocks/books";
import Modal from "~/components/Modal";
import { useState } from "react";


export const Livros = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOpenModal = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };  
  return (
    <>
      <Navbar />
      container principal
      <div className="flex h-screen w-full flex-col items-center ">
        <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="m-10 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
            A nossa biblioteca
          </h1>
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
              className="mb-5 w-96 rounded-3xl bg-[#FFFFFF3F]"
              defaultValue="Pesquise um Livro"
            />
          </div>
        </div>
     
        <div className="flex flex-row flex-wrap items-center justify-center ">
          <div className="hidden h-[480px] flex-col md:mr-[24px] md:flex ">
            <button onClick={handleOpenModal} className=" mb-3 flex  h-[381px] w-[261px] items-center justify-center border">
              <Image src={plusimg} className="w-[38px]" alt="plus icon"></Image>
            </button>
            <p className="addBook mt-3">Adicionar um livro</p>
            <Modal visible={isModalVisible} onClose={handleCloseModal} Texto="abrir" style><div></div></Modal>
          </div>
          {BooksMocks.map((book) => (
            <div key={book.id}>
              <Link href={`/livros/${book.id}`}>
                <Card color title={book.title}  />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Livros;
