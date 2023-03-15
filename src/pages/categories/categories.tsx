import Button from "~/components/button";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import Input from "antd/es/input";
import DropDown from "~/components/dropdown";
import { CategoriesMocks } from "../../mocks/categories";
import Link from "next/link";
import Card from "~/components/card";


const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col">
        <div className="flex w-[100%] flex-col items-center justify-center mt-16">
          <h1 className="m-10 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
            Que categoria Procura?
          </h1>
        </div>
        {/* dropdown */}
        <div className="">
          <DropDown />
        </div>
        {/* Buttons */}
        <div className="hidden flex-row flex-wrap items-center justify-center gap-6 md:flex">
        {CategoriesMocks.map((categorie) => (
            <div key={categorie.id}>
              <Link href={`/livros`}>
                <Button tranparent visibility width>{categorie.categories}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
