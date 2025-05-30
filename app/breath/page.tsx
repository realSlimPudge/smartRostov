"use client";
import Animation from "@/components/Animation/Animation";
import {
  ChevronLeft,
  GlassWater,
  Leaf,
  Park,
  Shrub,
  Water,
  Wind,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EcologyRating() {
  const router = useRouter();

  return (
    <Animation>
      <section className="flex flex-col justify-center items-center py-10 pt-20 w-screen min-h-screen bg-gray-50">
        {/* Заголовок и кнопка назад */}
        <div className="flex gap-x-5 justify-start items-center px-4 pb-10 w-full max-w-6xl">
          <button
            className="flex justify-center items-center text-white bg-blue-500 rounded-md transition-colors cursor-pointer hover:bg-blue-600"
            onClick={() => router.back()}
          >
            <ChevronLeft size={32} />
          </button>
          <h1 className="font-bold text-gray-800 text-[32px]">
            Экологический рейтинг Ростова-на-Дону
          </h1>
        </div>

        {/* Основной контент */}
        <div className="flex flex-col gap-8 px-4 w-full max-w-6xl lg:flex-row">
          {/* Блок с информацией */}
          <div className="p-8 w-full bg-white rounded-2xl shadow-lg lg:w-1/2">
            <div className="flex items-center mb-6">
              <Leaf className="mr-3 text-green-500" size={36} />
              <h2 className="text-2xl font-bold text-gray-800">
                Нахичевань-на-Дону
              </h2>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-3">
                <Wind className="mr-2 text-blue-400" />
                <span className="text-xl font-semibold">
                  Лучший показатель чистоты воздуха
                </span>
              </div>
              <div className="py-2 px-4 text-green-800 bg-green-100 rounded-lg">
                <span className="font-bold">
                  Индекс качества воздуха (AQI):
                </span>{" "}
                25 - Отличный
              </div>
            </div>

            <div className="space-y-4 text-gray-700">
              <div className="flex items-start">
                <Shrub className="flex-shrink-0 mt-1 mr-3 text-green-600" />
                <p>
                  <span className="font-semibold">Зеленые зоны:</span> Обилие
                  парков и скверов, включая Парк им. Вити Черевичкина и
                  Ботанический сад ЮФУ
                </p>
              </div>

              <div className="flex items-start">
                <GlassWater className="flex-shrink-0 mt-1 mr-3 text-blue-400" />
                <p>
                  <span className="font-semibold">Водные ресурсы:</span>{" "}
                  Близость к Дону обеспечивает естественную вентиляцию и очистку
                  воздуха
                </p>
              </div>

              <p className="py-2 pl-4 italic bg-green-50 border-l-4 border-green-500">
                Нахичевань сохранил свою историческую планировку с широкими
                улицами и обилием зеленых насаждений, что создает уникальный
                микроклимат в центре миллионного города
              </p>
            </div>
          </div>

          {/* Карта и изображение */}
          <div className="space-y-6 w-full lg:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div className="relative w-full h-64 md:h-80">
                <Image
                  src="/nahichevan-park.jpg"
                  alt="Парк в Нахичевани"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold">
                  Зеленый оазис в центре города
                </h3>
                <p className="text-sm text-gray-600">
                  Парковая зона Нахичевани, июнь 2023
                </p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl shadow-lg">
              <h3 className="flex items-center mb-3 text-lg font-bold">
                <svg
                  className="mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z"
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Экологическая карта района
              </h3>
              <div className="overflow-hidden relative w-full h-64 rounded-lg border-2 border-green-200">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A7ae18543de98b42ba1f107cd03c088cecee1e6f26cf9010c357c0f706d175846&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Карта Нахичевани"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className="p-8 mx-4 mt-10 w-full max-w-6xl bg-white rounded-2xl shadow-lg">
          <h3 className="pb-2 mb-6 text-xl font-bold text-gray-800 border-b-2 border-green-200">
            Почему в Нахичевани самый чистый воздух?
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="p-5 bg-green-50 rounded-xl border border-green-100">
              <div className="flex items-center mb-2 font-bold text-green-600">
                <Shrub className="mr-2" />
                Озеленение
              </div>
              <p>
                Более 35% территории района занимают парки, скверы и защитные
                зеленые зоны
              </p>
            </div>

            <div className="p-5 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center mb-2 font-bold text-blue-600">
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#2196F3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Планировка
              </div>
              <p>
                Широкие улицы и историческая радиальная планировка обеспечивают
                хорошую вентиляцию
              </p>
            </div>

            <div className="p-5 bg-amber-50 rounded-xl border border-amber-100">
              <div className="flex items-center mb-2 font-bold text-amber-600">
                <svg
                  className="mr-2"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="#FF9800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8V16M8 12H16"
                    stroke="#FF9800"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Транспорт
              </div>
              <p>
                Минимум промышленных предприятий и низкая транспортная нагрузка
                в жилых зонах
              </p>
            </div>
          </div>
        </div>

        {/* Кнопка возврата */}
        <button
          onClick={() => router.push("/")}
          className="py-3 px-8 mt-10 font-medium text-white bg-blue-500 rounded-xl shadow-md transition-colors hover:bg-blue-600"
        >
          Вернуться на главную
        </button>
      </section>
    </Animation>
  );
}
