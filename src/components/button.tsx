const Button = ({children}) => {
  return (
    <div className="flex justify-center items-center">
        <button className="rounded-full bg-[#FF4E16] h-[43px] w-[360px] py-2 px-4 font-bold text-white hover:bg-orange-700">
        {children}
      </button>
    </div>
  );
};

export default Button;
