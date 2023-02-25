import Input from "~/components/input";
import Button from "~/components/button";
import CheckButton from "~/components/checkButton";
import img from "./img/frontImg.png";

const Login = () => {
  return (
    <div className="container  flex h-[100vh] flex-row items-center  justify-center gap-[121px]">
      <div className="login1Left flex h-[85%] w-[35%]	 flex-col items-start justify-center">
        <h1 className="self-start	text-5xl uppercase text-white">
          Comece a Viajar pelos livros
        </h1>
        <img src={img} alt="teste" />
        <p className="text-xl  text-white">
          "Há livros escritos para evitar espaços vazios na estante"
        </p>
        <h6 className="text-sm text-white">Carlos Drummond de Andrade</h6>
      </div>

      <div className="login2Right flex h-[85%] w-[35%] flex-col items-center justify-center">
        <h2 className="self-start text-4xl text-white">Login</h2>
        <Input />
        <Input />
        <CheckButton />

        <Button>Login</Button>

        <hr className="m-5 w-[80%]" />
        <a
          className="contaLogin mt-5 flex w-[100%] justify-center rounded-[100px] border-4 pt-6 text-white"
          href="#"
        >
          Não tem Conta? Registe-se aqui
        </a>
        <Button> Não tem Conta? Registe-se aqui</Button>
      </div>
    </div>
  );
};

export default Login;
