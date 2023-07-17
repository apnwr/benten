import Maths from "../assets/images/maths.png";
import Image from "next/image";
import { Header } from "../components/Header";
import LayoutCreator from "../components/LayoutCreator";
import styles from "./create-layout.module.scss";

export default function CreateLayout() {
  return (
    <main className={styles.createLayoutContainer}>
        <div className={styles.bgcreateLayout}>
            <Image src={Maths} alt="maths_icon_bg" />
        </div>
      <Header />
      <LayoutCreator />
    </main>
  );
}
