//This file is created to take advantage of useFormStatus() hook

"use client";

import { useFormStatus } from "react-dom";

const MealsFormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending}>
      {pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsFormButton;
