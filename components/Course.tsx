import { CourseProps } from "@/types";
import { StarOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import styles from "../styles/Home.module.css";
import AddToCart from "./AddToCart";

const Course = ({ course }: { course: CourseProps }) => {
  return (
    <Popover content={<AddToCart {...course} />}>
      <div
        style={{ border: "1px solid #E9EAF0" }}
        className={styles.best_selling_course}
      >
        <img className={styles.best_selling_course_image} src={course.image} />
        <div className={styles.best_selling_course_info}>
          <div className={styles.best_selling_course_info_header}>
            <div className={styles.best_selling_course_category}>
              {course.cat}
            </div>
            <div className={styles.best_selling_course_price}>
              ${course.price}
            </div>
          </div>
          <div className={styles.best_selling_course_title}>{course.title}</div>
        </div>
        <div className={styles.best_selling_course_separator}></div>
        <div className={styles.best_selling_course_stats}>
          <div className={styles.best_selling_course_rating}>
            <div className={styles.best_selling_course_rating_text}>
              <StarOutlined /> {course.rating}
            </div>
          </div>
          <div className={styles.best_selling_course_students}>
            <div className={styles.best_selling_course_students_text}>
              {course.enrolled}
            </div>
            <div className={styles.best_selling_course_students_label}>
              students
            </div>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Course;
