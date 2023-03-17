import plusimg from "../../../public/image.png";
import Navbar from "~/components/navbar";
import Image from "next/image";
import Card from "~/components/card";
import Input from "~/components/input";
import Button from "~/components/button";
import Link from "next/link";
import { BooksMocks } from "../../mocks/books";
import Modal from "~/components/Modal";
import { useState } from "react";
import { BsPlusSquare } from "react-icons/bs";

export const Livros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      container principal
      <div className="flex h-screen w-full flex-col items-center ">
        <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="m-16 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
            A nossa biblioteca
          </h1>
          <div className="border-none">
            <Input  label="Pesquise um Livro"/>
          </div>
        </div>

        {/* on click abr o modal */}
        <Button onClick={handleModalOpen} width tranparent>
          <div>
            <span className="flex items-center justify-center gap-5">
              <BsPlusSquare />
              Adicionar Livro
            </span>
            <Modal
              text={"Adicionar"}
              title="Adicionar um Livro"
              isOpen={isModalOpen}
              onClose={handleModalClose}
            >
              <div className="flex flex-col items-center justify-center">
                <Input label="Titulo do Livro" />
                <Input label="Autor" />
                <Input label="Categoria" />
                <Input label="Editora" />
              </div>
            </Modal>
          </div>
        </Button>

        <div className="flex flex-row flex-wrap items-center justify-center ">
          <div className="hidden h-[432px] flex-col md:mr-[24px] md:flex ">
            <button
              onClick={handleModalOpen}
              className=" flex  h-[381px] w-[261px] items-center justify-center border"
            >
              <Image src={plusimg} className="w-[38px]" alt="plus icon"></Image>
            </button>
            <p className="addBook mt-3">Adicionar um livro</p>
            <Modal rounded
              text={"Adcionar"}
              title="Adicionar um Livro"
              isOpen={isModalOpen}
              onClose={handleModalClose}
            >
              <div className="flex flex-col items-center justify-center">
                <Input label="Titulo do Livro" />
                <Input label="Autor" />
                <Input label="Categoria" />
                <Input label="Editora" />
              </div>
            </Modal>
          </div>
          {BooksMocks.map((book) => (
            <div key={book.id}>
              <Link href={`/livros/${book.id}`}>
                <Card color title={book.title} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Livros;
