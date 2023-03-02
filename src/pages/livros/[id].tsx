import Navbar from "~/components/navbar";

const Details = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[100vh] w-[100vw] flex-col items-center ">
        <h1 className="m-10 self-center whitespace-nowrap  text-3xl text-white sm:mt-[50px] sm:self-start sm:text-6xl">
          Details Page
        </h1>
      </div>
    </>
  );
};

export default Details;
