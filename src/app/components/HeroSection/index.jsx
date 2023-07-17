import HeroImage from "../../assets/images/heroImg.jpeg";
import ThreeD from "../../assets/images/threeDRoom.jpeg";
import Image from "next/image";
import styles from "./HeroSection.module.scss";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className={styles.heroSectionContainer}>
      <div className={styles.imageContainer}>
        <Image src={ThreeD} alt="hero_section_img" />
      </div>
      <div className={styles.description}>
        <h2>Design your dream hasslefree!!</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          repellat facilis molestiae, numquam distinctio ipsam beatae velit
          nesciunt. Necessitatibus exercitationem culpa sequi libero delectus
          quas. Ipsam voluptatum nulla assumenda dolorem?
        </p>
        <Link href="/layouts" className={styles.btn}>
          Design now
        </Link>
      </div>
    </section>
  );
}
