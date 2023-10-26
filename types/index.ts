import React, { MouseEventHandler } from "react";

export type CustomButtonProps = {
  title: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  style?: React.CSSProperties;
};

export type CourseProps = {
  title: string;
  price: number;
  rating: number;
  cat: string;
  image: string;
  enrolled: string;
};

export type InstructorProps = {
  image: string;
  name: string;
  position: string;
  rating: string;
  student_number: number;
};
