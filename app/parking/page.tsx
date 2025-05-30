"use client";
import Animation from "@/components/Animation/Animation";
import { Car, ChevronLeft, MapPin, RussianRuble, Timer } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Parking() {
  const router = useRouter();
  if (typeof window === "undefined") {
    return;
  }
  return (
    <Animation>
      <section className="flex flex-col justify-center items-center w-screen h-screen">
        <div className="flex gap-x-5 justify-start items-center pb-20 w-full pl-30">
          <button
            className="flex justify-center items-center text-white bg-blue-500 rounded-md cursor-pointer"
            onClick={() => {
              router.back();
            }}
          >
            <ChevronLeft size={32} />
          </button>
          <h2 className="text-[32px]">Карта парковок</h2>
        </div>
        <div className="flex gap-x-5 mx-auto w-fit">
          <div className="flex flex-col gap-y-5 py-10 bg-white rounded-2xl shadow-sm px-30 w-[611px] h-[450px]">
            <h3 className="text-xl font-bold">Парковка № 4175</h3>
            <p className="text-sm text-gray-500">Уличная парковка</p>
            <p className="py-2 px-3 text-white bg-blue-400 rounded-2xl w-fit">
              Придорожная
            </p>
            <div className="flex gap-x-5 justify-start items-center">
              <MapPin />
              <span>Текучева улица, 141-145</span>
            </div>
            <div className="flex gap-x-5 justify-start items-center">
              <Timer />
              <span>20:00 - 23:59</span>
            </div>
            <div className="flex gap-x-5 justify-start items-center">
              <Car />
              <span>Всего мест: 31</span>
            </div>
            <div className="flex gap-x-5 justify-start items-center">
              <RussianRuble />
              <span>бесплатно</span>
            </div>
            <button className="py-3 px-4 mx-auto text-white bg-blue-400 rounded-xl cursor-pointer w-fit texxt-center">
              Начать парковку
            </button>
          </div>
          <div className="overflow-hidden rounded-2xl w-[700px] h-[450px]">
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&source=constructor"
              width="700"
              height="450"
              frameBorder="0"
              title="Yandex Map"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Animation>
  );
}
