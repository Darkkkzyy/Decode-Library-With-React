import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const Navbar = () => {
  return (
    <div className="flex w-full border text-white items-center h-[50px] justify-evenly">
        <Image></Image>
      <div className="flex justify-between w-1/3 border ">
        <Link href="/">Home</Link>
        <Link href="asd">Book</Link>
        <Link href="asd">Categories</Link>
        <Link href="asd">About Us</Link>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Navbar;
