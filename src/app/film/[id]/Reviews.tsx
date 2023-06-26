'use client'

import React, {FunctionComponent} from "react";
import classNames from "classnames";

import {useGetReviewQuery} from "@/store/services/reviewApi";
import {Review} from "@/components/Review/Review";
import {ReviewLoader} from "@/components/Review/ReviewLoader";

import styles from "./styles.module.css"

interface ReviewsProps {
  id: number;
}

export const Reviews: FunctionComponent<ReviewsProps> = ({id}) => {
  const {data, isLoading, error} = useGetReviewQuery(String(id));

  if (isLoading) {
    return <ReviewLoader />
  }

  if (!data || error) {
    return <span>Not Found</span>
  }

  const rootStyles = classNames(styles.review, styles.grid);

  return (
    <div className={rootStyles}>
    {
      data.map(({name, text, rating, id}) => <Review key={id} name={name} text={text} rating={rating} />)
    }
    </div>
  )
}
