import {
  BestInstructor,
  BestSellingCourses,
  Hero,
  RecentlyAdded,
  TopCategory,
  TopInstructorOfMonth,
} from "@/components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <TopCategory />
      <BestSellingCourses />
      <RecentlyAdded />
      <BestInstructor />
      <TopInstructorOfMonth />
    </main>
  );
}
