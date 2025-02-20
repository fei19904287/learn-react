import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
// import Gallery from "./components/gallery";
import Profilemis from "./qcomps/profile_mistake";
import Firstcomp from "./qcomps/firstcomp";
import TodoList from "./qcomps/todos";
import Profile from "./components/profile_props";
import Gallery from "./qcomps/gallery_props";

export default function Home() {
  return (
    <div className={styles.main}>
      <Gallery />
    </div>
  );
}
