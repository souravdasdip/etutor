"use client";

import { useAppSelector } from "@/redux";
import { StarFilled } from "@ant-design/icons";
import styles from "../styles/Home.module.css";

const TopInstructorOfMonth = () => {
  const instructors = useAppSelector((state) => state.instructors);

  return (
    <div className={styles.top_instructor_container}>
      <h1 className={styles.top_instructor_title}>
        Top Instructor of the month
      </h1>
      <div className={styles.top_instructor_grid}>
        {instructors.map((i, index) => (
          <div key={index} className={styles.top_instructor_item}>
            <img
              className={styles.top_instructor_image}
              src={i.image}
              alt={i.name}
            />
            <div className={styles.top_instructor_details}>
              <div className={styles.top_instructor_name}>{i.name}</div>
              <div className={styles.top_instructor_position}>{i.position}</div>
            </div>
            <div className={styles.top_instructor_separator}></div>
            <div className={styles.top_instructor_ratings}>
              <div className={styles.top_instructor_rating}>
                <div className={styles.top_instructor_rating_value}>
                  <StarFilled style={{ color: "#FD8E1F" }} /> {i.rating}
                </div>
              </div>
              <div className={styles.top_instructor_students}>
                <div className={styles.top_instructor_students_value}>
                  {i.student_number}
                </div>
                <div className={styles.top_instructor_students_label}>
                  students
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopInstructorOfMonth;
