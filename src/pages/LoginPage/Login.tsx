import Input from "~/components/input";
import Button from "~/components/button";
import CheckButton from "~/components/checkButton";
import img from "./img/frontImg.png"

const Login = () => {
  return (
    <div className="container flex justify-center items-center flex-row w-[100vw] h-[100vh] gap-[121px]">
      <div className="login1Left flex justify-center items-center	 flex-col w-[35%] h-[85%]">
        <h1>Comece a Viajar pelos livros</h1>
        <img
          src="./img/frontImg"
          alt="teste"
        />
        <p>"Há livros escritos para evitar espaços vazios na estante"</p>
        <h6>Carlos Drummond de Andrade</h6>
      </div>

      <div className="login2Right flex justify-center items-center flex-col w-[25%] h-[85%]">
        <h2 className="text-end text-4xl text-white">Login</h2>
        <Input/>
        <Input/>
       <CheckButton/>

        <Button>Login</Button>

        <hr />
        <a className="contaLogin" href="#">
          Não tem Conta? Registe-se aqui
        </a>
      </div>
    </div>
  );
};

export default Login;
