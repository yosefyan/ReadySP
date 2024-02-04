import React from "react";
import aboutData from "../constants/aboutData";
import getRandomNumber from "./getRandomNumber";

const getRandomElementFromArray = (array: React.FC[] | string[]) => {
  const randomIndex = getRandomNumber(array.length);
  return array[randomIndex];
};

const { ReviewsData, SalesData } = aboutData;

const getRandomReview = () => {
  let data = [ReviewsData.Icons, ReviewsData.Reviews, SalesData.Sales];
  let res = data.map((da) => {
    return getRandomElementFromArray(da);
  });
  const [person, review, sale] = res;

  return {
    person,
    review,
    sale,
  };
};

export default getRandomReview;
