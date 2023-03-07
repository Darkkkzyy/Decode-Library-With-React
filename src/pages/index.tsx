import { type NextPage } from "next";
import Image from "next/image";
import Navbar from "~/components/navbar";
import Button from "~/components/button";
import frontImage from "../../public/book.png";
import Link from "next/link";
import Modal from "~/components/Modal";
import Card from "~/components/card";
import { Children } from "react";

const Home: NextPage = () => {
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
                <Link href={"/"}>Requisite já o seu livro</Link>
              </Button>
            </div>
            <a href="/Decode-Library/Library"></a>
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
      <div className=" flex h-screen w-full items-center justify-center bg-slate-100">
        {/* Home Second */}
        <div className=" flex max-w-7xl  flex-col ">
          {/* Home Title*/}
          <div className=" flex flex-col ">
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
            <div className="flex flex-row">
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
    </>
  );
};

export default Home;
