import { type NextPage } from "next";

import Button from "~/components/button";
import Card from "~/components/card";
import Input from "~/components/input";
import Login from "./LoginPage/Login";

const Home: NextPage = () => {
  return (
    <>

    <Login/>
    {/* <Input/>
     <Button>
      Login

     </Button> */}
    </>
  );
};

export default Home;
