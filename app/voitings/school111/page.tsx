"use client";

import Animation from "@/components/Animation/Animation";
import { useState } from "react";

export default function School() {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <Animation>
      <section className="pt-40 w-screen">
        <div className="mx-auto w-fit">
          <h1 className="p-4 px-6 text-3xl text-white bg-blue-500 rounded-2xl">
            Благоустройство Школы № 111
          </h1>
        </div>
        <div className="flex flex-col justify-between items-center pt-40 mx-auto space-y-5 w-3/4">
          <h3 className="text-xl font-semibold text-black">О проект:</h3>
          <p className="py-2 px-3 text-xl text-white bg-blue-500 rounded-2xl">
            Муниципальный экологический проект «Ростов – ЭКОгород» (ранее
            «Ростов – город будущего») направлен на создание единой системы
            экологического воспитания школьников, активизацию деятельности
            образовательных учреждений города по вовлечению обучающихся в
            природоохранную, просветительскую и исследовательскую
            деятельность.Основные направления деятельности: акции,
            просветительская деятельность, учебно-исследовательская
            деятельность.
          </p>
          <button
            className={`transition duration-300 ease text-xl border border-blue-500 text-center cursor-pointer px-6 py-4 rounded-2xl ${isActive ? "bg-blue-500 text-white" : "bg-transparent text-black"} `}
            onClick={() => {
              setIsActive((prev) => !prev);
            }}
          >
            Голосую за
          </button>
        </div>
      </section>
    </Animation>
  );
}
