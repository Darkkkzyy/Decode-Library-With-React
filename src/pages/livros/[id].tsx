import { useRouter } from "next/router";
import { useState } from "react";
import Button from "~/components/button";
import Card from "~/components/card";
import Modal from "~/components/Modal";
import Navbar from "~/components/navbar";
import { BooksMocks } from "../../mocks/books";


const Details = () => {
  const router = useRouter();
  const book = BooksMocks.filter((book: Books) => book.id === router.query.id);
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
      
      <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center gap-0 md:gap-5">
        <div className="flex items-center justify-center">
          {/* Título da página */}

          {book.map((book) => (
          <div
            key={book.id}
            className="flex flex-col items-center justify-center md:flex-row ">
            
            <h1 className=" self-start whitespace-nowrap p-5 text-2xl text-white md:self-center md:text-3xl ">
              A nossa Bibloteca - 
            </h1>      
            <h1 className=" text-[20px]  md:text-[30px] text-[#FF4E16] " > {book.title} </h1>
          </div>
        ))}

            

        </div>

        {book.map((book) => (
          <div
            key={book.id}
            className="flex h-[70vh] w-[100vw] flex-col items-center justify-center md:flex-row md:gap-52"
          >
            {/* Renderiza um cartão com a imagem do livro */}
            <Card />

            <div className="">
              {/* Título do livro */}
              <h1 className="mb-7 text-[40px]">{book.title}</h1>
              {/* Preço do livro */}
              <p className="mb-7 text-[28px] text-[#FF4E16]">{book.price}</p>
              {/* Autor do livro */}
              <p className="mb-7 text-[20px]">{book.autor}</p>
              {/* Editora do livro */}
              <p className="mb-7">{book.editora}</p>

              {/* Botão de requisição */}
              <Button visibility width onClick={handleModalOpen}>
                Requisitar
              </Button>

              {/* Modal de requisição */}
              <Modal
                text={"Requisitar"}
                title="Requisitar"
                isOpen={isModalOpen} // Define se o modal está aberto ou fechado
                onClose={handleModalClose} // Função chamada ao fechar o modal
              >
                <div className="flex items-center justify-center">
                  {/* Informações sobre o livro exibidas no modal */}
                  <p>Este livro custa x por semana</p>
                  <p className="text-[18px] text-[#FF4E16]">
                    Total de: {book.price}
                  </p>
                </div>
              </Modal>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
