"use client";

import { Select, Space } from "antd";
import React from "react";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Selector: React.FC = () => (
  <Space wrap>
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: "jack", label: "Jack" },
        { value: "lucy", label: "Lucy" },
        { value: "Yiminghe", label: "yiminghe" },
        { value: "disabled", label: "Disabled", disabled: true },
      ]}
    />
  </Space>
);

export default Selector;
