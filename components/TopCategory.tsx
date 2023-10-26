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
            <span className={styles.category_icon}>{cat.icon}</span>
            <div>
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
