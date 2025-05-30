"use client";
import Animation from "@/components/Animation/Animation";
import { CalendarDays, ChevronLeft, MapPin, Music, Ticket } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ConcertsPage() {
  const router = useRouter();

  const concerts = [
    {
      id: 1,
      artist: "Ленинград",
      date: "9-10 июля",
      time: "20:00",
      venue: "Embargo Villa",
      price: "5500 - 50000 ₽",
      age: "18+",
      highlight: "Легендарная группа с новым туром",
      features: ["Новый альбом 'Вояджер'", "Спецэффекты", "Гостевые участия"],
    },
    {
      id: 2,
      artist: "Anna Asti",
      date: "13-15 августа",
      time: "19:30",
      venue: "Embargo Villa",
      price: "4500 - 19000 ₽",
      age: "18+",
      highlight: "Сольный концерт российской поп-дивы",
      features: ["Премьера новых песен", "Хореографическое шоу", "VIP-встречи"],
    },
    {
      id: 3,
      artist: "Каспийский груз",
      date: "13 июня",
      time: "20:00",
      venue: "Кроп Арена Воздух",
      price: "1800 - 5400 ₽",
      age: "16+",
      highlight: "Акустический концерт в новом формате",
      features: [
        "Лучшие хиты за 10 лет",
        "Эксклюзивные аранжировки",
        "Живой оркестр",
      ],
    },
    {
      id: 4,
      artist: "Руки Вверх!",
      date: "29-30 июня",
      time: "19:00",
      venue: "ДК Ростсельмаш",
      price: "4300 - 29000 ₽",
      age: "12+",
      highlight: "Юбилейное шоу '30 лет вместе'",
      features: ["Ностальгические хиты", "Интерактив с залом", "Фейерверк"],
    },
    {
      id: 5,
      artist: "Михаил Шуфутинский",
      date: "30 сентября",
      time: "19:00",
      venue: "Конгресс-холл ДГТУ",
      price: "4000 - 15000 ₽",
      age: "12+",
      highlight: "Тур 'Легенды шансона'",
      features: [
        "Классика жанра",
        "Оркестровое сопровождение",
        "Авторские истории",
      ],
    },
    {
      id: 6,
      artist: "Танцы Минус",
      date: "25 октября",
      time: "19:00",
      venue: "Конгресс-холл ДГТУ",
      price: "1500 - 9000 ₽",
      age: "12+",
      highlight: "Энергичное рок-шоу 'Перезагрузка'",
      features: [
        "Новый материал",
        "Культовые хиты",
        "Экспериментальные версии",
      ],
    },
  ];

  // Популярные площадки :cite[2]:cite[5]
  const venues = [
    { name: "Embargo Villa", events: 12 },
    { name: "Конгресс-холл ДГТУ", events: 9 },
    { name: "ДК Ростсельмаш", events: 7 },
    { name: "Кроп Арена Воздух", events: 5 },
  ];

  return (
    <Animation>
      <section className="flex flex-col justify-center items-center py-10 pt-20 w-screen min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Заголовок и кнопка назад */}
        <div className="flex gap-x-5 justify-start items-center px-4 pb-10 w-full max-w-6xl">
          <button
            className="flex justify-center items-center p-2 text-white bg-purple-600 rounded-md transition-colors cursor-pointer hover:bg-purple-700"
            onClick={() => router.back()}
          >
            <ChevronLeft size={28} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-purple-900 md:text-4xl">
              Концертная афиша Ростова
            </h1>
            <p className="mt-2 text-purple-700">
              Самые ожидаемые музыкальные события 2025 года
            </p>
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex flex-col gap-8 px-4 w-full max-w-6xl lg:flex-row">
          {/* Список концертов */}
          <div className="w-full lg:w-2/3">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {concerts.map((concert) => (
                <div
                  key={concert.id}
                  className="overflow-hidden bg-white rounded-2xl border border-purple-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="p-5 text-white bg-gradient-to-r from-purple-600 to-purple-800">
                    <div className="flex justify-between items-start">
                      <div>
                        <h2 className="text-2xl font-bold">{concert.artist}</h2>
                        <p className="text-purple-200">{concert.highlight}</p>
                      </div>
                      <span className="py-1 px-3 text-sm font-medium bg-purple-900 rounded-full">
                        {concert.age}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center mb-4 text-gray-700">
                      <CalendarDays
                        className="mr-2 text-purple-600"
                        size={20}
                      />
                      <span className="font-medium">
                        {concert.date} • {concert.time}
                      </span>
                    </div>

                    <div className="flex items-center mb-5 text-gray-700">
                      <MapPin className="mr-2 text-purple-600" size={20} />
                      <span>{concert.venue}</span>
                    </div>

                    <div className="mb-6">
                      <h3 className="pb-2 mb-3 font-semibold text-gray-800 border-b border-purple-200">
                        Особенности концерта:
                      </h3>
                      <ul className="space-y-2">
                        {concert.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mt-2 mr-2 w-2 h-2 bg-purple-500 rounded-full"></span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-purple-700">
                        {concert.price}
                      </span>
                      <button className="flex items-center py-2 px-4 font-medium text-white bg-purple-600 rounded-lg transition-colors hover:bg-purple-700">
                        <Ticket className="mr-2" size={18} />
                        Купить билет
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Карта площадок */}
            <div className="p-6 mt-10 bg-white rounded-2xl shadow-xl">
              <h2 className="pb-2 mb-6 text-2xl font-bold text-center text-purple-900 border-b border-purple-200">
                Концертные площадки на карте
              </h2>
              <div className="overflow-hidden relative w-full h-96 rounded-xl border-2 border-purple-200">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A313358368eb6f7bbee1da032ca20f1fa48cf6448f6d3e81aa84f6e6f3eed7e1c&amp;source=constructor"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Концертные площадки Ростова-на-Дону"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Боковая панель - Популярные площадки */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-5 p-6 bg-white rounded-2xl shadow-lg">
              <h2 className="flex items-center pb-2 mb-6 text-xl font-bold text-purple-900 border-b border-purple-200">
                <Music className="mr-2 text-purple-600" />
                Топ площадок
              </h2>

              <ul className="space-y-5">
                {venues.map((venue, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center pb-3 border-b border-purple-100"
                  >
                    <div>
                      <h3 className="font-semibold">{venue.name}</h3>
                      <p className="text-sm text-gray-600">
                        {venue.events} событий в этом месяце
                      </p>
                    </div>
                    <span className="py-1 px-3 text-sm text-purple-800 bg-purple-100 rounded-full">
                      #{index + 1}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="p-5 mt-8 bg-purple-50 rounded-xl border border-purple-200">
                <h3 className="mb-3 font-bold text-purple-800">
                  Советы меломанам:
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">✓</span>
                    <span>
                      Бронируйте билеты заранее - самые ожидаемые концерты
                      раскупаются за 2-3 месяца
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">✓</span>
                    <span>
                      Проверяйте возрастные ограничения перед покупкой
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-purple-600">✓</span>
                    <span>
                      Приходите за 1-1.5 часа до начала для лучших мест
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Календарь событий */}
            <div className="p-6 mt-8 bg-white rounded-2xl shadow-lg">
              <h2 className="flex items-center mb-5 text-xl font-bold text-purple-900">
                <CalendarDays className="mr-2 text-purple-600" />
                Июнь 2025
              </h2>
              <ul className="space-y-4">
                <li className="flex justify-between items-center pb-2 border-b border-purple-100">
                  <div>
                    <p className="font-medium">Каспийский груз</p>
                    <p className="text-sm text-gray-600">
                      13 июня • Кроп Арена
                    </p>
                  </div>
                  <span className="py-1 px-3 text-xs text-purple-800 bg-purple-100 rounded-full">
                    16+
                  </span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-purple-100">
                  <div>
                    <p className="font-medium">Pyre</p>
                    <p className="text-sm text-gray-600">
                      1 июня • Дом Офицеров
                    </p>
                  </div>
                  <span className="py-1 px-3 text-xs text-purple-800 bg-purple-100 rounded-full">
                    18+
                  </span>
                </li>
                <li className="flex justify-between items-center pb-2 border-b border-purple-100">
                  <div>
                    <p className="font-medium">ГУДТАЙМС</p>
                    <p className="text-sm text-gray-600">
                      12 июня • Клуб 'Подмостки'
                    </p>
                  </div>
                  <span className="py-1 px-3 text-xs text-purple-800 bg-purple-100 rounded-full">
                    16+
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Кнопка возврата */}
        <div className="mt-12">
          <button
            onClick={() => router.push("/")}
            className="py-3 px-8 font-medium text-white bg-purple-600 rounded-xl shadow-md transition-colors hover:bg-purple-700"
          >
            Вернуться на главную
          </button>
        </div>
      </section>
    </Animation>
  );
}
