"use client";
import { useAppSelector } from "@/redux";
import { CourseProps } from "@/types";
import styles from "../styles/Home.module.css";
import Course from "./Course";

const BestSellingCourses = () => {
  const courses: CourseProps[] = useAppSelector((state) => state.courses);

  return (
    <div
      className={styles.best_selling_container}
      style={{ background: "white" }}
    >
      <h1 className={styles.best_selling_title}>Browse Recently Added</h1>
      <div className={styles.best_selling_courses}>
        {courses.slice(0, 4).map((course, index) => (
          <Course key={index} course={course} />
        ))}
      </div>
    </div>
  );
};

export default BestSellingCourses;
