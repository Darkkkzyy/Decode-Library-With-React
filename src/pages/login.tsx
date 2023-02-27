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
      <div className="container mr-0 flex h-[100vh] w-[100%] flex-row items-center  justify-center gap-[175px]">
        <div className="login1Left hidden lg:flex h-[85%] w-[70%]  flex-col items-center justify-center ">
          <div className=" flex justify-center w-[75%] mb-10 ">
            <h1 className="self-start text-5xl uppercase  text-white ">
              Comece a Viajar pelos livros
            </h1>
          </div>

          <Image className="w-[75%]" src={frontImage} alt="teste" />
          <div className="flex justify-center w-[75%] flex-col ">
             <p className="text-xl text-white mb-3 mt-5">
            &quot;Há livros escritos para evitar espaços vazios na estante&quot;
          </p>
          <h6 className="text-sm text-white">Carlos Drummond de Andrade</h6>
          </div>
        </div>

        <div className="login2Right flex h-[85%] w-[30%] flex-col items-center justify-center">
          <h2 className="self-start text-4xl text-white">Login</h2>
          <Input />
          <Input />
          <CheckButton />
          <Button width>
            <Link href="login">Login</Link>
          </Button>
          <hr className="m-5 w-[80%]" />
          <Button width tranparent>
            Não tem Conta? Registe-se aqui
          </Button>
        </div>
      </div>
    </>
  );
};

export default Login;
