import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";

const App: React.FC = () => (
  <Dropdown className="h-[16px] w-[343px] rounded-[20px] border bg-white p-5">
    <a className="flex" onClick={(e) => e.preventDefault()}>
      <Space className="flex items-center justify-center !gap-[120px]">
        <span className="text-[#AAAAAA] ">Hover me, Click menu item</span>
        <DownOutlined className="text-[#FF4E16]" />
      </Space>
    </a>
  </Dropdown>
);

export default App;
