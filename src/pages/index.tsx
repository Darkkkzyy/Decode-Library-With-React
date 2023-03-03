import { type NextPage } from "next";
import Image from "next/image";
import Navbar from "~/components/navbar";
import Button from "~/components/button";
import frontImage from "../../public/book.png";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      {/* HomeFirstContainer */}
      <div className="flex items-center justify-center  h-screen w-full ">
        {/* Home First */}
        <div className="flex max-w-7xl">
          {/* Container Left */}
          <div className=" m-3  lg:flex flex-col justify-center  ">
            <h1 className="text-[60px] mb-10">Bem-vindo à nossa biblioteca online</h1>
            <p className=" block text-[20px] mb-10">
              Descruba os romances, histórias míticas, biografias e muito mais
              na nossa biblioteca. Requisite o seu próximo livro de uma forma
              fácil e em poucos passos
            </p>
            <div className="flex justify-left">
            <Button visibility width>
              <Link href={"/"}>Requisite já o seu livro</Link>
            </Button>
            </div>
            <a href="/Decode-Library/Library"></a>
          </div>
          {/* Container Right */}
          <div className=" hidden m-3 lg:flex items-center justify-center">
            <Image className="w-[1400px] h-full" src={frontImage} alt="Front Livros" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
