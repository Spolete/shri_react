'use client'

import React from "react";
import {MovieInfo} from "@/app/film/[id]/MovieInfo";
import {Reviews} from "@/app/film/[id]/Reviews";

import styles from "./styles.module.css";

export default function Film({params}: { params: { id: number } }) {
  return (
    <div className={styles.grid}>
      <MovieInfo id={params.id} />
      <Reviews id={params.id} />
    </div>
  )
}
