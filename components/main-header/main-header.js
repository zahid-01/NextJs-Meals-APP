"use client";

import Link from "next/link";
import Image from "next/image";

import MainHeaderBackground from "./main-header-background";

import logoImg from "/assets/logo.png";
import styles from "./main-header.module.css";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="An image having food items" priority />
          Next Level Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink url="/meals">Browse meals</NavLink>
            </li>
            <li>
              <NavLink url="/comunity">Join community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
