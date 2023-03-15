import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import Logo from "../../public/Logo.png";
import { useState } from "react";
//import { AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "LIVROS", link: "/livros" },
    { name: "CATEGORIES", link: " categories/categories" },
    { name: "ABOUT US", link: "/aboutus" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full shadow-md">
      <div className="items-center justify-between bg-[#252525] py-4 px-7 md:flex md:px-10">
        <div
          className="flex cursor-pointer items-center font-[Poppins] text-2xl font-bold 
      text-gray-800"
        >
          <Link href={"/"}>
          <Image
            src={Logo}
            alt={"Decode Logo"}
            className="h-[33px] w-[65px]"
          ></Image></Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          {/*<AiOutlineMenu />*/}
        </div>

        <ul
          className={`absolute left-0 z-[-1] w-full bg-[#2e2e2e] pb-12  pl-9 transition-all dur ation-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-[#252525] md:pb-0 md:pl-0 
          ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="my-7 mr-2 text-xl md:my-0 md:ml-8">
              <a
                href={link.link}
                className="text-[#E3E3E3] duration-500 hover:text-gray-400"
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="md:ml-10">
            {" "}
            <Button visibility tranparent>
              <Link href="login">Login</Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
