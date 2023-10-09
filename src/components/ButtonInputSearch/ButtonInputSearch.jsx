import { Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorButton = "rgb(13,92,182)",
    colorButton = '#fff',
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorInput, borderRadius: "2px", border: "none" }}
      />
      <Button
        size={size}
        bordered={bordered}
        style={{ backgroundColor: backgroundColorButton, borderRadius: "2px", border:'none', color: colorButton}}
        icon={<SearchOutlined color={colorButton}/>}
      >
        <span style={{color: colorButton}}>{textButton}</span>
      </Button>
    </div>
  );
};

export default ButtonInputSearch;
