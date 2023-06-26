'use client'

import React, {FunctionComponent} from 'react';
import Image from 'next/image';

import styles from "./styles.module.css";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {useSelector} from "react-redux";

import {selectTotalTicketsAmount} from "@/store/features/cart/selector";
import {RootState} from "@/store/store";

export const Header: FunctionComponent = () => {
  const router = useRouter();
  const totalTicketsAmount = useSelector((state: RootState) => selectTotalTicketsAmount(state));

  return (
    <header className={styles.root}>
      <Link href={"/"} className={styles.name}>Билетопоиск</Link>
      <div className={styles.right}>
        <div className={styles.tickets}>{totalTicketsAmount}</div>
        <Image
          src="/basket.svg"
          alt="basket image"
          className={styles.basket}
          width={28}
          height={25}
          priority
          onClick={() => router.push("/cart")}
        />
      </div>
    </header>
  );
};
