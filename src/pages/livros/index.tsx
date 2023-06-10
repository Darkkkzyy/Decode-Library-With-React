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



  /*Este trecho de código define um componente funcional em React chamado Livros. Ele utiliza o hook 
    useState para definir uma variável de estado isModalOpen e sua função de alteração correspondente setIsModalOpen, 
    ambos inicializados como false. Essa variável de estado controla a visibilidade do componente de modal. */
  export const Livros = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  /*Este bloco de código retorna os elementos JSX a serem renderizados. Ele inclui o componente Navbar, um container div 
  com estilo flexbox e um título (h1) com o texto "A nossa biblioteca". Também renderiza um componente Input com o rótulo 
  "Pesquise um Livro". */
  return (
    <>
      <Navbar />
      container principal
      <div className="flex h-screen w-full flex-col items-center ">
        <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="mt-16 self-center whitespace-nowrap p-10 text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
            A nossa biblioteca
          </h1>
          <div className="border-none">
            <Input label="Pesquise um Livro" />
          </div>
        </div>

        {/* Esta seção renderiza um componente Button que dispara a abertura de um modal quando clicado. O botão exibe o texto "Adicionar Livro" 
        juntamente com um ícone (BsPlusSquare) e contém um componente Modal. O componente Modal é renderizado condicionalmente 
        com base no valor de isModalOpen. Ele inclui vários componentes Input para capturar informações sobre um livro.*/}
        <Button onClick={() => setIsModalOpen(true)} width tranparent>
          <div>
            <span className="flex items-center justify-center gap-5">
              <BsPlusSquare />
              Adicionar Livro
            </span>
            <Modal
              text={"Adicionar"}
              title="Adicionar um Livro"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
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
              onClick={() => setIsModalOpen(false)}
              className=" flex  h-[381px] w-[261px] items-center justify-center border"
            >
              
              <Image src={plusimg} className="w-[38px]" alt="plus icon"></Image>
            </button>
            <p className="addBook mt-3">Adicionar um livro</p>
            <Modal
              rounded
              text={"Adcionar"}
              title="Adicionar um Livro"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
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
