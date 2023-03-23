import Image from "next/image";
import Navbar from "~/components/navbar";
import Button from "~/components/button";
import frontImage from "../../public/book.png";
import Link from "next/link";
import Modal from "~/components/Modal";
import Card from "~/components/card";
import { useState } from "react";
import Input from "~/components/input";
import footerImage from "../../public/Footer.png";
import { useTranslation } from "react-i18next";

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const { t } = useTranslation();

  return (
    <>
      {" "}
      <Navbar />
      {/* HomeFirstContainer */}
      <div className="flex mt-14 w-full  items-center justify-center  ">
        {/* Home First */}
        <div className="flex max-w-7xl gap-10">
          {/* Container Left */}
          <div className=" m-3  flex-col justify-center lg:flex   ">
            <h1 className="mb-10 text-[60px]">
              {/* vai buscar a chave welcome=valor */}
              {t("welcomeToPage")}
            </h1>
            <p className=" mb-10 block text-[20px]">{t("discoverText")}</p>
            <div className="justify-left flex">
              <Button visibility width>
                <Link href={"/livros"}>{t("button.orderbook")}</Link>
              </Button>
            </div>
          </div>
          {/* Container Right */}
          <div className=" m-3 hidden items-center justify-center lg:flex ml-10">
            <Image
              className=" h-full w-[1400px]"
              src={frontImage}
              alt="Front Livros"
            />
          </div>
        </div>
      </div>
      {/* Home Second Container */}
      <div className=" flex  w-full items-center justify-center bg-slate-100">
        {/* Home Second */}
        <div className=" flex max-w-7xl flex-col ">
          {/* Home Title*/}
          <div className=" m-6 flex  flex-col  ">
            <h1 className="mb-10 text-[60px] text-black">
              {t("alwaysNews")}
            </h1>
            <p className=" mb-10 block text-[20px] text-black">
              {t("seeNewBooks")}
            </p>
          </div>
          {/* Book Container */}
          <div className=" ">
            {/* Home Books*/}
            <div className="flex flex-col items-center justify-center lg:flex-row">
              {/* Container 1 */}
              <div className="flex flex-row">
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
              </div>
              {/* Container 1 */}
              <div className="flex flex-row">
                <div className="">
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
                <div>
                  <Card title="War & Peace" autor="Leo Tolstoy"></Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Container */}
      <div className="flex h-[700px] flex-col items-center justify-center gap-10 md:gap-[260px] lg:h-[400px] lg:flex-row">
        {/* Footer */}
        <div className="">
          <h1 className="ml-5">{t("newsLetter")}</h1>
          <p className="ml-5">{t("receiveNews")}</p>
          <div className="sm:flex-row ml-0 flex flex-col items-center  justify-center">
            <Input   label="Digite seu email..." />
            {/* Modal */}
            <Button onClick={handleModalOpen} visibility width>
              {" "}
              <Link href={"/"}>{t("register")}</Link>
            </Button>
            <Modal
              rounded
              text="Voltar"
              title={t("titleModalHome")}
              isOpen={isModalOpen}
              onClose={handleModalClose}
            >
              <div className="flex flex-col items-center justify-center">
                <p className="mt-5 text-sm text-white">
                  {t("modalHome")}
                </p>
              </div>
            </Modal>
          </div>
        </div>
        <Image className="" src={footerImage} alt="Front Livros" />
      </div>
    </>
  );
};

export default Home;
