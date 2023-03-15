import Link from "next/link";
import { useRouter } from "next/router";
import Button from "~/components/button";
import Card from "~/components/card";
import Navbar from "~/components/navbar";
import type { Books } from "~/models/books";
import { BooksMocks } from "../../mocks/books";

const Details = () => {
  const router = useRouter();
  const book = BooksMocks.filter((book: Books) => book.id === router.query.id);

  console.log(book);
  return (
    <>
      <Navbar />
      <div className="flex h-[100vh] w-[100vw] items-center ">
        <h1 className="m-10 self-center whitespace-nowrap  text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
          Details Page
        </h1>
        {book.map((book) => (
          <div key={book.id} className="flex gap-52 items-center justify-center  ">
            <Card 
              color
            />
            <div className="mb-24">
            <h1 className="mb-7">{book.title}</h1>
            <p className="mb-7">{book.price}</p>
            <p className="mb-7">{book.autor}</p>
            <p className="mb-7">{book.autor}</p>
            <Button visibility width>Requisitar</Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
