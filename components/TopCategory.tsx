import Image from "next/image";
import styles from "../styles/Home.module.css";

const TopCategory = () => {
  const categories = [
    {
      label: "Label",
      sublabel: "63,476 Courses",
      icon: "label",
      color: "#EBEBFF",
    },
    {
      label: "Business",
      sublabel: "63,476 Courses",
      icon: "business",
      color: "#E1F7E3",
    },
    {
      label: "Development",
      sublabel: "63,476 Courses",
      icon: "label",
      color: "#E1F7E3",
    },
    {
      label: "Lifestyle ",
      sublabel: "63,476 Courses",
      icon: "business",
      color: "#F5F7FA",
    },
    {
      label: "Design",
      sublabel: "63,476 Courses",
      icon: "label",
      color: "#F5F7FA",
    },
    {
      label: "Business",
      sublabel: "63,476 Courses",
      icon: "business",
      color: "#FFF2E5 ",
    },
    {
      label: "Office Productivity ",
      sublabel: "63,476 Courses",
      icon: "label",
      color: "#EBEBFF",
    },
    {
      label: "Marketing",
      sublabel: "63,476 Courses",
      icon: "business",
      color: "#E1F7E3",
    },
  ];
  return (
    <div className={styles.category_container}>
      <h1 className={styles.category_title}>Browse Category</h1>
      <div className={styles.category_grid}>
        {categories.map((cat, i) => (
          <div
            key={i}
            className={styles.cat}
            style={{ backgroundColor: `${cat.color}` }}
          >
            <span className={styles.category_icon}>
              <Image width={40} height={40} src={"/icon.png"} alt="icon" />{" "}
            </span>
            <div style={{ flex: 0.6 }}>
              <p className={styles.cat_title}>{cat.label}</p>
              <p className={styles.cat_subtitle}>{cat.sublabel}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategory;
