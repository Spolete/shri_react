'use client'

import Link from "next/link";
import Image from "next/image";
import React, {useState} from 'react';

import {Modal} from "@/components/Modal/Modal";
import {Counter} from "@/components/Counter/Counter";

import styles from "./styles.module.css";

interface TicketCardProps {
  genre: string;
  name: string;
  img: string;
  id: string;
  count?: number;
  close?: boolean;
  onClose?: () => void;
}

export const TicketCard = ({genre, name, img, close, id}: TicketCardProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <Image
          src={img}
          alt="poster image"
          className={styles.image}
          width={100}
          height={120}
          priority
        />
        <div className={styles.info}>
          <Link className={styles.name} href={`/film/${id}`}>{name}</Link>
          <div className={styles.genre}>{genre}</div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.counter}>
          <Counter id={id}/>
          {close &&
            <Image
              src="/close.svg"
              alt="close image"
              className={styles.close}
              width={14}
              height={14}
              priority
              onClick={() => setShowModal(true)}
            />
          }
        </div>
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal} id={id} />
    </div>
  );
};
