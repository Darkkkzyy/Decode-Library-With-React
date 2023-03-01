import Image from "next/image";
import Navbar from "~/components/navbar";
import frontImage from "../../public/rBook.png";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* Container Main */}
      <div className="flex h-screen w-full  items-center justify-center gap-[100px]">
        {/* Container About Us*/}
        <div className="flex h-screen w-full flex-col items-center justify-center px-[12rem]">
          <h1 className="self-start">Sobre Nós</h1>
          {/* Container Text */}
          <div className="flex flex-col items-center justify-center md:flex-row  ">
            {/* Container Left */}
            <div className="flex w-[55%] flex-col gap-[40px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut ullamcorper ut viverra felis orci, non. Non, ac
                convallis convallis aliquet leo neque. Luctus condimentum at
                condimentum purus. Varius urna congue bibendum nisi netus vitae
                risus. Viverra vulputate eu sollicitudin lorem odio mi, enim,
                pulvinar. Ipsum molestie commodo consequat nulla viverra.
                Imperdiet est purus et malesuada interdum. Nisl aliquam quam
                lectus augue.
              </p>
              <p>
                Purus viverra nullam augue consectetur gravida. Porttitor in mi
                et convallis ipsum vulputate. Aliquam donec sollicitudin at
                maecenas arcu tempus, sit etiam. Nec cras adipiscing nec
                suspendisse nibh fermentum erat aliquet suspendisse. Blandit
                ultrices sollicitudin aliquam rhoncus mattis posuere sem elit.
                Sit tempus nec velit urna. Arcu sem dictumst accumsan nunc ut
                interdum gravida commodo.
              </p>
              <p>
                Gravida eros accumsan adipiscing elementum iaculis amet. Sed
                aliquet pharetra, et sed mi bibendum scelerisque. Lorem lorem
                non purus in ligula et elit ipsum. Quis velit felis lacus
                ultrices dolor.
              </p>
            </div>
            {/* Container Right */}
            <div className="w-[45%]">
              <Image className="" src={frontImage} alt="Front Livros" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
