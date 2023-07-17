import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import Bricks from "./assets/images/bricks.png";
import Image from "next/image";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
     

      <Header />
      <HeroSection />
      <div className={styles.bg} />
      
    </main>
  );
}
