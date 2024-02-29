"use server";
import { redirect } from "next/navigation";

import { shareMeal } from "./meals";

export const formHandler = async (formData) => {
  let myData = {};
  for (const key of formData.keys()) {
    myData[key] = formData.get(key);
  }

  return { messsage: "sending messages" };
  // await shareMeal(myData);
  // redirect("/meals");
};
