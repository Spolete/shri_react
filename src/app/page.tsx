'use client'

import {Sidebar} from "@/components/Sidebar/Sidebar";
import {Films} from "@/components/Films/Films";

import styles from "./styles.module.css";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.sidebarContent}>
        <Sidebar />
      </div>
      <div className={styles.right}>
        <Films />
      </div>
    </div>
  )
}
