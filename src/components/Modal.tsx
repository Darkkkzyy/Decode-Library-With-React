import React, { useState } from "react";
import { Button, Modal } from "antd";
import type { ReactNode } from "react";

interface Prop {
  children: ReactNode;
  Texto:string;
}

const App = ({children,Texto}:Prop) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
      <Button type="primary" onClick={showModal} style={{background:"#FF4E16", borderRadius:"100px"}}>
     {Texto}
      </Button>
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onCancel={handleCancel}
        cancelButtonProps={{ style: { display: "none" } }}
        okButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
         {children}
      </Modal>
    </>
  );
};

export default App;
