import { CustomButtonProps } from "@/types";
import { Button } from "antd";

const CustomButton = ({ title, onClick, type, style }: CustomButtonProps) => {
  return (
    <Button
      style={{
        padding: "24px",
        background: "#FF6636",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        display: "flex",
        border: "none",
        ...style,
      }}
      type={type}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
