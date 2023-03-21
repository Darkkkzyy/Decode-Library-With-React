import Image from "next/image";
import Navbar from "~/components/navbar";
import frontImage from "../../public/rBook.png";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[50%] items-center justify-center lg:h-screen mt-5 sm:mt-0 ">
        <div className="mt-16 sm:mt-0 flex h-[80%] w-full flex-col items-center justify-center lg:flex-row gap-6 sm:gap-0">
          <div className="mt-10  w-full lg:p-20 md:w-[50%] p-3 sm:p-0">
            <h1 className="mb-8 text-3xl font-bold ">Seu texto aqui</h1>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque ut ullamcorper ut viverra felis orci, non. Non, ac
              convallis convallis aliquet leo neque. Luctus condimentum at
              condimentum purus. Varius urna congue bibendum nisi netus vitae
              risus. Viverra vulputate eu sollicitudin lorem odio mi, enim,
              pulvinar. Ipsum molestie commodo consequat nulla viverra.
              Imperdiet est purus et malesuada interdum. Nisl aliquam quam
              lectus augue.
            </p>
            <p className="">
              Purus viverra nullam augue consectetur gravida. Porttitor in mi et
              convallis ipsum vulputate. Aliquam donec sollicitudin at maecenas
              arcu tempus, sit etiam. Nec cras adipiscing nec suspendisse nibh
              fermentum erat aliquet suspendisse. Blandit ultrices sollicitudin
              aliquam rhoncus mattis posuere sem elit. Sit tempus nec velit
              urna. Arcu sem dictumst accumsan nunc ut interdum gravida commodo.
            </p>
            <p className="">
              Gravida eros accumsan adipiscing elementum iaculis amet. Sed
              aliquet pharetra, et sed mi bibendum scelerisque. Lorem lorem non
              purus in ligula et elit ipsum. Quis velit felis lacus ultrices
              dolor.
            </p>{" "}
          </div>
          <div className="flex w-[100%] justify-center sm:w-[50%] ">
            <Image
              src={frontImage}
              alt="Sua imagem aqui"
              className="w-[100%] sm:w-[60%]"
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
