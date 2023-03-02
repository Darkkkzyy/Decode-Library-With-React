import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import Logo from "../../public/Logo.png";

const Navbar = () => {
  return (
    <div className="flex w-full border text-white items-center h-[50px] justify-evenly">
        <Image src={Logo} className="w-[75px] h-[43px]" alt="Logo Empresa"></Image>
      <div className="flex justify-between w-1/3 border ">
        <Link href="/">Home</Link>
        <Link href="livros">Book</Link>
        <Link href="categories">Categories</Link>
        <Link href="aboutus">About Us</Link>
      </div>
      <div>
      <Button visibility tranparent>
            <Link href="login">Login</Link>
          </Button>
      </div>
    </div>
    // <div>
    //   <div>
    //     <Image src={Logo} className="h-[43px] w-[75px]"></Image>
    //   </div>
    //   <div>
    //     <Link href="/">Home</Link>
    //     <Link href="asd">Book</Link>
    //     <Link href="asd">Categories</Link>
    //     <Link href="asd">About Us</Link>
    //   </div>
    //   <div>
    //     <Button tranparent>Login</Button>
    //   </div>

    // </div>
  );
};

export default Navbar;
