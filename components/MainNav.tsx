"use client";
import { useAppSelector } from "@/redux";
import { CourseProps } from "@/types";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "antd";
import Image from "next/image";
import { TextInput } from ".";
import styles from "../styles/Home.module.css";
import CustomButton from "./CustomButton";
import Selector from "./Selector";

function MainNav() {
  const cart: CourseProps[] = useAppSelector((state) => state.cart);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 35px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        <Image width={108} height={28} src={"/logo.png"} alt="etutor" />
        <div className={styles.nav_selector}>
          <Selector />
        </div>
        <div className={styles.text_input}>
          <TextInput />
        </div>
      </div>

      <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
        <div style={{ cursor: "pointer" }}>
          <Badge size="small" count={cart.length}>
            <ShoppingCartOutlined />
          </Badge>
        </div>
        <span>
          <HeartOutlined />
        </span>
        <div className={styles.nav_buttons} style={{ display: "flex", gap: 5 }}>
          <CustomButton
            title="Create Account"
            type="text"
            style={{ background: "#FFEEE8", color: "#FF6636" }}
          />
          <CustomButton title="Sign in" type="primary" />
        </div>
      </div>
    </div>
  );
}

export default MainNav;
