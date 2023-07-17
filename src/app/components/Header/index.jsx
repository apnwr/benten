"use client";

import Logo from "../../assets/images/logo.png"
import Image from "next/image";
import styles from "./Header.module.scss";
import Link from "next/link";

export function Header() {
  return <section className={styles.headerContainer}>
<div className={styles.logo} >
    <Link href="/" >
    <Image src={Logo} alt="logo_icon"/> 
    </Link>
    </div>
  </section>;
}
