import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { IoIosArrowDown } from "react-icons/io";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const DropDown = () => (
  <>
  <div className="flex justify-center items-center">
    <Dropdown className="block md:hidden w-[340px]" menu={{ items }} placement="bottomRight">
      <Button type="primary" style={{background:"white", borderRadius:"100px", color:"gray"}}>Escolher Categoria<span className="flex justify-between items-center "><IoIosArrowDown/></span></Button>
    </Dropdown>
  </div>
    
  </>
);

export default DropDown;
