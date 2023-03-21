import Input from "~/components/input";
import Button from "~/components/button";
import CheckButton from "~/components/checkButton";
import frontImage from "../../public/frontImg.png";
import Link from "next/link";
import Image from "next/image";
import Navbar from "~/components/navbar";

const Login = () => {
  return (
    <>
      <Navbar />
{/* CONTAINER MAIN */}
      <div className=" flex h-screen w-full  items-center justify-center gap-[100px]">
      {/* login1Left */}
        <div className="hidden h-[85%] w-[50%] flex-col  items-center justify-center lg:flex ">
          <div className=" mb-10 flex w-[75%] justify-center ">
            <h1 className="self-start text-5xl uppercase  text-white ">
              Comece a Viajar pelos livros
            </h1>
          </div>

          <Image className="w-[75%]" src={frontImage} alt="Front Livros" />
          <div className="flex w-[75%] flex-col justify-center ">
            <p className="mb-3 mt-5 text-xl text-white">
              &quot;Há livros escritos para evitar espaços vazios na
              estante&quot;
            </p>
            <h6 className="text-sm text-white">Carlos Drummond de Andrade</h6>
          </div>
        </div>
        {/* login2Right */}
        <div className="mr-0 sm:mr-24 !ml-0  flex  h-[85%] w-[50%] flex-col  items-center justify-center md:ml-[250px] lg:w-[30%]">
          <div className="self-center sm:self-start">
            <h2 className="text-4xl mr-6 text-white">Login</h2>
          </div>
          <Input label="teste" />
          <Input label="teste" />
          <CheckButton />
          <Button width visibility>
            <Link href="login">Login</Link>
          </Button>
          <hr className="m-5 w-[60%]" />
          <Button width tranparent visibility>
            <Link href={"register"}>Não tem Conta? Registe-se aqui</Link>  
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
