import styles from "../styles/Home.module.css";

function Footer() {
  return (
    <div>
      <div className={styles.footer_container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_text}>
            <div className={styles.footer_title}>
              Start learning with 67.1k students around the world.
            </div>
            <div className={styles.footer_buttons}>
              <button className={styles.footer_button_join}>
                <div className={styles.footer_button_text}>Join the Family</div>
              </button>
              <button className={styles.footer_button_browse}>
                <div className={styles.footer_button_text}>
                  Browse all courses
                </div>
              </button>
            </div>
          </div>
          <div className={styles.footer_stats}>
            <div className={styles.footer_stat}>
              <div className={styles.footer_stat_number}>6.3k</div>
              <div className={styles.footer_stat_text}>Online courses</div>
            </div>
            <div className={styles.footer_stat}>
              <div className={styles.footer_stat_number}>26k</div>
              <div className={styles.footer_stat_text}>
                Certified Instructor
              </div>
            </div>
            <div className={styles.footer_stat}>
              <div className={styles.footer_stat_number}>99.9%</div>
              <div className={styles.footer_stat_text}>Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
