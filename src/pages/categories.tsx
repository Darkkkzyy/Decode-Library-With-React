import Button from "~/components/button";
import Navbar from "~/components/navbar";
import { FaSearch } from "react-icons/fa";
import Input from "antd/es/input";
const Categories = () => {
  return (
    <>
      <Navbar />  
      <div className="flex flex-col h-screen">
      <div className="flex w-[80%] flex-col items-center justify-center">
          <h1 className="m-10 self-center whitespace-nowrap text-3xl text-white sm:mt-[50px] sm:text-6xl sm:self-start">
            Que categoria Procura?
          </h1>
          {/* searchContainer */}
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
              className="mb-5 rounded-3xl bg-[#FFFFFF3F]"
              defaultValue="Pesquise um Livro"
            />
          </div>
        </div>

    <div className="flex flex-row justify-center items-center gap-6 flex-wrap">
        <Button visibility tranparent width>
          <span className="flex justify-center items-center">Desenvolvimento Pessoal</span>
        </Button>
        <Button visibility tranparent width>
          <span className="flex justify-center items-center">Desenvolvimento Pessoal</span>
        </Button>
        <Button visibility tranparent width>
          <span className="flex justify-center items-center">Desenvolvimento Pessoal</span>
        </Button>
        <Button visibility tranparent width>
          <span className="flex justify-center items-center">Desenvolvimento Pessoal</span>
        </Button></div>
      </div>
    </>
  );
};

export default Categories;
