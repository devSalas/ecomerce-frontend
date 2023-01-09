import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/fechtProduct";

export default function CategorySlider() {
  const { data } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="p-2 flex gap-2">
      {data?.map((category,i) => (
        <Category key={i} title={category} />
      ))}
    </div>
  );
}

function Category({ title }) {
  return (
    <button className="py-2 px-4 border rounded-full hover:border-sky-300">
      {title}
    </button>
  );
}
