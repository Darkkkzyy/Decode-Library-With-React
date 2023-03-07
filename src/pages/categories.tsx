import Button from "~/components/button";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import Input from "antd/es/input";
import DropDown from "~/components/dropdown";
const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen flex-col">
        <div className="flex w-[100%] flex-col items-center justify-center">
          <h1 className="m-10 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
            Que categoria Procura?
          </h1>
          {/* searchContainer */}
          {/* <div className="border-none">
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
          </div> */}
        </div>
        {/* dropdown */}
        <div className="">
          <DropDown />
        </div>
        {/* Buttons */}
        <div className="hidden flex-row flex-wrap items-center justify-center gap-6 md:flex">
          <Button visibility tranparent width>
            <span className="flex items-center justify-center">
              Desenvolvimento Pessoal
            </span>
          </Button>
          <Button visibility tranparent width>
            <span className="flex items-center justify-center">
              Desenvolvimento Pessoal
            </span>
          </Button>
          <Button visibility tranparent width>
            <span className="flex items-center justify-center">
              Desenvolvimento Pessoal
            </span>
          </Button>
          <Button visibility tranparent width>
            <span className="flex items-center justify-center">
              Desenvolvimento Pessoal
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Categories;
