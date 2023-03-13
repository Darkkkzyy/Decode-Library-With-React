import Link from "next/link";
import { useRouter } from "next/router";
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
      <div className="flex h-[100vh] w-[100vw] flex-col items-center ">
        <h1 className="m-10 self-center whitespace-nowrap  text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
          Details Page
        </h1>
        {book.map((book) => (
          <div key={book.id}>
            <Card
              color
              title={book.title}
              autor={book.autor}
              price={book.price}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
