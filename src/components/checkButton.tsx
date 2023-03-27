import { Checkbox } from "antd";

const CheckButton = () => {
  return (
    <>
      <Checkbox className="mt-4 mb-4 flex whitespace-nowrap text-white accent-black " style={{accentColor:"#FF4E16"}}>
        Lembrar-me nas proximas sessões
      </Checkbox>
    </>
  );
};

export default CheckButton;
