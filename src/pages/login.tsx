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
      <div className="container  flex h-[100vh] flex-row items-center  justify-center gap-[121px]">
        <div className="login1Left flex h-[85%] w-[35%] flex-col items-start justify-center">
          <h1 className="self-start text-5xl text-white uppercase">
            Comece a Viajar pelos livros
          </h1>
          <Image src={frontImage} alt="teste" />
          <p className="text-xl text-white">
            &quot;Há livros escritos para evitar espaços vazios na estante&quot;
          </p>
          <h6 className="text-sm text-white">Carlos Drummond de Andrade</h6>
        </div>

        <div className="login2Right flex h-[85%] w-[35%] flex-col items-center justify-center">
          <h2 className="self-start text-4xl text-white">Login</h2>
          <Input />
          <Input />
          <CheckButton />
          <Button>
            <Link href="teste">Login</Link>
          </Button>
          <hr className="m-5 w-[80%]" />
          <Button tranparent>Não tem Conta? Registe-se aqui</Button>
        </div>
      </div>
    </>
  );
};

export default Login;
