import Image from "next/image";
import Link from "next/link";
import Button from "./button";
import Logo from "../../public/Logo.png";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import LanguageSwitcher from "~/components/LanguageSwitcher";

const Navbar = () => {
  const Links = [
    { name: "HOME", link: "/" },
    { name: "LIVROS", link: "/livros" },
    { name: "CATEGORIES", link: " categories/categories" },
    { name: "ABOUT US", link: "/aboutus" },
  ];

  const [open, setOpen] = useState(false);
  const languages = ["en", "pt", "fr"];

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
            ></Image>
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer text-3xl md:hidden"
        >
          <AiOutlineMenu />
        </div>

        <ul
          className={`dur ation-500 absolute left-0 z-[-1] w-full  bg-[#252525] pb-12 pl-9 transition-all ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:bg-[#252525] md:pb-0 md:pl-0 
          ${open ? "top-2 " : "top-[-490px]"}`}
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
          <li className="md:mx-10">
            {" "}
            <Button visibility tranparent>
              <Link href="/login">Login</Link>
            </Button>
          </li>
          <li className="flex m-5 items-center">
            <LanguageSwitcher languages={languages} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
