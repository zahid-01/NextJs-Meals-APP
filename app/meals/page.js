import Link from "next/link";

import classes from "./page.module.css";

import MealsGrid from "@/components/meals/meals-grid";

import { getMeals } from "@/DB/meals";
import { Suspense } from "react";

const GetData = async () => {
  const meal = await getMeals();
  return <MealsGrid meals={meal} />;
};

const Meals = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Choose you recipe!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe!</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
          <GetData />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
