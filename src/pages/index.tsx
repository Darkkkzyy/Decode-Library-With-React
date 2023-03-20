import Image from "next/image";
import Navbar from "~/components/navbar";
import Button from "~/components/button";
import frontImage from "../../public/book.png";
import Link from "next/link";
import Modal from "~/components/Modal";
import Card from "~/components/card";
import { useState } from "react";
import Input from "~/components/input";
import footerImage from "../../public/Footer.png";

export const Home = () => {
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
      {/* HomeFirstContainer */}
      <div className="flex h-screen w-full  items-center justify-center ">
        {/* Home First */}
        <div className="flex max-w-7xl">
          {/* Container Left */}
          <div className=" m-3  flex-col justify-center lg:flex  ">
            <h1 className="mb-10 text-[60px]">
              Bem-vindo à nossa biblioteca online
            </h1>
            <p className=" mb-10 block text-[20px]">
              Descruba os romances, histórias míticas, biografias e muito mais
              na nossa biblioteca. Requisite o seu próximo livro de uma forma
              fácil e em poucos passos
            </p>
            <div className="justify-left flex">
              <Button visibility width>
                <Link href={"/livros"}>Requisite já o seu livro</Link>
              </Button>
            </div>
          </div>
          {/* Container Right */}
          <div className=" m-3 hidden items-center justify-center lg:flex">
            <Image
              className=" h-full w-[1400px]"
              src={frontImage}
              alt="Front Livros"
            />
          </div>
        </div>
      </div>

      {/* Home Second Container */}
      <div className=" flex  w-full items-center justify-center bg-slate-100">
        {/* Home Second */}
        <div className=" flex max-w-7xl flex-col ">
          {/* Home Title*/}
          <div className=" m-6 flex  flex-col  ">
            <h1 className="mb-10 text-[60px] text-black">
              Sempre com novidades
            </h1>
            <p className=" mb-10 block text-[20px] text-black">
              Veja os novos livros que apareceram!
            </p>
          </div>
          {/* Book Container */}
          <div className=" ">
            {/* Home Books*/}
            <div className="flex flex-col items-center justify-center lg:flex-row">
              {/* Container 1 */}
              <div className="flex flex-row">
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
              </div>
              {/* Container 1 */}
              <div className="flex flex-row">
                <div className="">
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Container */}
      <div className="flex h-[700px] flex-col items-center justify-center gap-10 md:h-[400px] md:flex-row md:gap-[260px]">
        {/* Footer */}
        <div className="">
          <h1 className="ml-5">Sempre com novidades</h1>
          <p className="ml-5">Veja os novos livros que apareceram!</p>
          <div className="ml-0 flex flex-col items-center justify-center  md:flex-row">
            <Input label="teste" />
            {/* Modal */}
            <Button onClick={handleModalOpen} visibility width>
              {" "}
              <Link href={"/"}>Inscrever</Link>
            </Button>
            <Modal
              rounded
              text="Voltar"
              title="Inscrição Feita"
              isOpen={isModalOpen}
              onClose={handleModalClose}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="mt-5 text-sm text-white">
                  Irá receber as nossas novidades no seu email.
                </p>
              </div>
            </Modal>
          </div>
        </div>
        <Image className="" src={footerImage} alt="Front Livros" />
      </div>
    </>
  );
};

export default Home;
