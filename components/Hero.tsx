import Image from "next/image";
import styles from "../styles/Home.module.css";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className={styles.hero_container}>
      <div className={styles.hero_title}>
        <div className={styles.hero_title_text}>
          Learn with expert anytime anywhere
        </div>
        <div className={styles.hero_description_text}>
          Our mission is to help people find the best course online and learn
          with expert anytime, anywhere.
        </div>

        <CustomButton type="primary" title={"Create Account"} />
      </div>
      <div className={styles.hero_img}>
        <Image
          alt="hero"
          width={600}
          height={548}
          style={{ objectFit: "contain" }}
          src="/hero.png"
        />
      </div>
    </div>
  );
};

export default Hero;
