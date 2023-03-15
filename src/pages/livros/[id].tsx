import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Button from "~/components/button";
import Card from "~/components/card";
import DropDown from "~/components/dropdown";
import Modal from "~/components/Modal";
import Navbar from "~/components/navbar";
import type { Books } from "~/models/books";
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
      <div className="flex h-[100vh] w-[100vw] flex-col items-center ">
        <div className="flex items-center justify-center">
          <h1 className="mt-28 w-[100vw]  self-start whitespace-nowrap p-5 text-3xl text-white sm:self-center  sm:text-6xl">
            Details Page
          </h1>
        </div>
        {book.map((book) => (
          <div
            key={book.id}
            className="flex h-[70vh] w-[100vw] flex-col items-center justify-center sm:flex-row sm:gap-52"
          >
            <Card />
            <div className="mb-24">
              <h1 className="mb-7 text-[40px]">{book.title}</h1>
              <p className="mb-7 text-[28px] text-[#FF4E16]">{book.price}</p>
              <p className="mb-7 text-[20px]">{book.autor}</p>
              <p className="mb-7">{book.editora}</p>
              <Button visibility width onClick={handleModalOpen} >
                Requisitar

                <Modal
              text={"Requisitar"}
              title="Requisitar"
              isOpen={isModalOpen}
              onClose={handleModalClose}
            >
            </Modal>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
