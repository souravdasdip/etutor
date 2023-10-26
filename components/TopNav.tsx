import styles from "../styles/Home.module.css";

const TopNav = () => {
  const items = ["Home", "Courses", "About", "Contact", "Become a Instructor"];
  return (
    <div
      className={styles.top_nav}
      style={{
        width: "100%",
        height: 52,
        paddingLeft: 32,
        paddingRight: 32,
        background: "#1D2026",
        justifyContent: "space-between",
        alignItems: "center",
        display: "inline-flex",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          gap: 8,
          display: "flex",
        }}
      >
        {items.map((top_nav, i) => (
          <div
            key={i}
            style={{
              padding: 16,
              background: "#1D2026",
              //   boxShadow: "0px 2px 0px #FF6636 inset",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 10,
              display: "flex",
            }}
          >
            <div
              style={{
                color: "#A1A5B3",
                fontSize: 14,
                wordWrap: "break-word",
              }}
            >
              {top_nav}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          gap: 24,
          display: "flex",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#A1A5B3",
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 22,
              wordWrap: "break-word",
            }}
          >
            USD
          </div>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: 6,
            display: "flex",
          }}
        >
          <div
            style={{
              color: "#A1A5B3",
              fontSize: 14,
              fontWeight: "400",
              lineHeight: 22,
              wordWrap: "break-word",
            }}
          >
            English
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
