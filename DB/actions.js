"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { shareMeal } from "./meals";

export const formHandler = async (prevState, formData) => {
  let myData = {};
  for (const key of formData.keys()) {
    myData[key] = formData.get(key);
  }

  await shareMeal(myData);
  revalidatePath("/meals");
  redirect("/meals");
  // return { message: "This is a server action generated response" };
};
