"use client";
import Animation from "@/components/Animation/Animation";
import { ChevronLeft, Hospital, Phone, Pill, Shield } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HealthSafetyPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("emergency");

  const emergencyContacts = [
    {
      id: 1,
      name: "Единая служба спасения",
      number: "112",
      description: "Круглосуточный вызов экстренных служб",
    },
    {
      id: 2,
      name: "Скорая медицинская помощь",
      number: "103",
      description: "Круглосуточная медицинская помощь",
    },
    {
      id: 3,
      name: "Полиция",
      number: "102",
      description: "Вызов полиции в экстренных случаях",
    },
    {
      id: 4,
      name: "Пожарная служба",
      number: "101",
      description: "Вызов пожарных и спасателей",
    },
    {
      id: 5,
      name: "Городская служба спасения",
      number: "8863-282-01-11",
      description: "Аварийные и спасательные работы",
    },
    {
      id: 6,
      name: "Антикризисный центр",
      number: "8863-267-55-77",
      description: "Психологическая помощь",
    },
  ];

  const hospitals = [
    {
      id: 1,
      name: "Городская больница №1",
      address: "ул. Б. Садовая, 105",
      phone: "8863-263-10-10",
      services: ["Травмпункт", "Реанимация", "Приёмное отделение"],
      hours: "Круглосуточно",
    },
    {
      id: 2,
      name: "Областная клиническая больница",
      address: "ул. 1-й Конной Армии, 33",
      phone: "8863-232-22-22",
      services: ["Стационар", "Диагностика", "Специалисты"],
      hours: "08:00-20:00",
    },
    {
      id: 3,
      name: "Детская горбольница №2",
      address: "ул. 339-й Стрелковой Дивизии, 18",
      phone: "8863-222-66-36",
      services: ["Педиатрия", "Неотложная помощь детям", "Вакцинация"],
      hours: "Круглосуточно",
    },
  ];

  const pharmacies = [
    {
      id: 1,
      name: "Аптека 36,6",
      address: "ул. Б. Садовая, 46",
      phone: "8863-240-36-06",
      hours: "08:00-22:00",
    },
    {
      id: 2,
      name: "Аптека Горздрав",
      address: "пр. Стачки, 32",
      phone: "8863-223-45-67",
      hours: "Круглосуточно",
    },
    {
      id: 3,
      name: "ЕАптека",
      address: "ул. Пушкинская, 111",
      phone: "8863-267-89-00",
      hours: "09:00-21:00",
    },
  ];

  const safetyTips = [
    {
      id: 1,
      title: "В жаркую погоду",
      icon: "☀️",
      tips: [
        "Носите головной убор и светлую одежду",
        "Пейте не менее 2 литров воды в день",
        "Избегайте пребывания на солнце с 12:00 до 16:00",
      ],
    },
    {
      id: 2,
      title: "На воде",
      icon: "🌊",
      tips: [
        "Купайтесь только в разрешенных местах",
        "Не оставляйте детей без присмотра",
        "Не ныряйте в незнакомых местах",
      ],
    },
    {
      id: 3,
      title: "В общественных местах",
      icon: "🏙️",
      tips: [
        "Храните ценные вещи во внутренних карманах",
        "Избегайте темных переулков в ночное время",
        "Сообщайте о подозрительных предметах в полицию",
      ],
    },
    {
      id: 4,
      title: "Здоровье",
      icon: "❤️",
      tips: [
        "Сделайте прививку от клещевого энцефалита",
        "Используйте репелленты в парках и лесах",
        "Регулярно проходите диспансеризацию",
      ],
    },
  ];

  return (
    <Animation>
      <section className="flex flex-col justify-center items-center py-10 pt-20 w-screen min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Заголовок и кнопка назад */}
        <div className="flex gap-x-5 justify-start items-center px-4 pb-10 w-full max-w-6xl">
          <button
            className="flex justify-center items-center p-2 text-white bg-blue-500 rounded-md transition-colors cursor-pointer hover:bg-blue-600"
            onClick={() => router.back()}
          >
            <ChevronLeft size={28} />
          </button>
          <div>
            <h1 className="text-3xl font-bold text-blue-900 md:text-4xl">
              Здоровье и безопасность
            </h1>
            <p className="mt-2 text-blue-700">
              Экстренные службы, медицинская помощь и советы для ростовчан
            </p>
          </div>
        </div>

        {/* Навигация */}
        <div className="flex flex-wrap gap-4 justify-center px-4 mb-8 w-full max-w-6xl">
          <button
            className={`px-6 py-3 rounded-full transition-all flex items-center ${activeTab === "emergency"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-900 border border-blue-200 hover:bg-blue-50"
              }`}
            onClick={() => setActiveTab("emergency")}
          >
            <Phone className="mr-2" size={20} />
            <span className="font-medium">Экстренные службы</span>
          </button>

          <button
            className={`px-6 py-3 rounded-full transition-all flex items-center ${activeTab === "hospitals"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-900 border border-blue-200 hover:bg-blue-50"
              }`}
            onClick={() => setActiveTab("hospitals")}
          >
            <Hospital className="mr-2" size={20} />
            <span className="font-medium">Больницы</span>
          </button>

          <button
            className={`px-6 py-3 rounded-full transition-all flex items-center ${activeTab === "pharmacies"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-900 border border-blue-200 hover:bg-blue-50"
              }`}
            onClick={() => setActiveTab("pharmacies")}
          >
            <Pill className="mr-2" size={20} />
            <span className="font-medium">Аптеки</span>
          </button>

          <button
            className={`px-6 py-3 rounded-full transition-all flex items-center ${activeTab === "safety"
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-blue-900 border border-blue-200 hover:bg-blue-50"
              }`}
            onClick={() => setActiveTab("safety")}
          >
            <Shield className="mr-2" size={20} />
            <span className="font-medium">Советы безопасности</span>
          </button>
        </div>

        {/* Основной контент */}
        <div className="flex flex-col gap-8 px-4 w-full max-w-6xl lg:flex-row">
          {/* Блок с информацией */}
          <div className="w-full lg:w-2/3">
            {/* Экстренные службы */}
            {activeTab === "emergency" && (
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-900">
                  <Phone className="mr-2 text-blue-600" size={24} />
                  Экстренные службы Ростова
                </h2>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {emergencyContacts.map((contact) => (
                    <div
                      key={contact.id}
                      className="p-5 rounded-xl border border-blue-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold">{contact.name}</h3>
                        <span className="py-1 px-3 font-medium text-blue-800 bg-blue-100 rounded-full">
                          {contact.number}
                        </span>
                      </div>
                      <p className="mb-4 text-gray-600">
                        {contact.description}
                      </p>
                      <button className="flex justify-center items-center py-2 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                        <Phone className="mr-2" size={16} />
                        Позвонить
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-5 mt-8 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="flex items-center mb-3 font-bold text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Важная информация:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Все звонки на номера 101, 102, 103, 112 бесплатны с
                        любых телефонов
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        При звонке в экстренные службы сохраняйте спокойствие и
                        четко назовите адрес
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        В Ростове работает система экстренного оповещения МЧС
                        через СМС
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "hospitals" && (
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-900">
                  <Hospital className="mr-2 text-blue-600" size={24} />
                  Медицинские учреждения
                </h2>

                <div className="space-y-6">
                  {hospitals.map((hospital) => (
                    <div
                      key={hospital.id}
                      className="p-5 rounded-xl border border-blue-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold">{hospital.name}</h3>
                        <span className="py-1 px-3 text-sm text-blue-800 bg-blue-100 rounded-full">
                          {hospital.hours}
                        </span>
                      </div>

                      <div className="flex items-center mb-3 text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 w-5 h-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{hospital.address}</span>
                      </div>

                      <div className="flex items-center mb-4 text-gray-700">
                        <Phone className="mr-2 text-blue-600" size={18} />
                        <span>{hospital.phone}</span>
                      </div>

                      <div className="mb-4">
                        <h4 className="mb-2 font-semibold text-gray-800">
                          Основные услуги:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {hospital.services.map((service, index) => (
                            <span
                              key={index}
                              className="py-1 px-3 text-sm text-blue-800 bg-blue-100 rounded-full"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>

                      <button className="py-2 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                        Построить маршрут
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-5 mt-8 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="flex items-center mb-3 font-bold text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    График работы:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Травмпункты работают круглосуточно во всех районах
                        города
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Телефон регистратуры: 8863-267-20-20 (единый для всех
                        поликлиник)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Электронная запись к врачу доступна через портал
                        Госуслуг
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Аптеки */}
            {activeTab === "pharmacies" && (
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-900">
                  <Pill className="mr-2 text-blue-600" size={24} />
                  Круглосуточные аптеки
                </h2>

                <div className="space-y-6">
                  {pharmacies.map((pharmacy) => (
                    <div
                      key={pharmacy.id}
                      className="p-5 rounded-xl border border-blue-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-bold">{pharmacy.name}</h3>
                        <span className="py-1 px-3 text-sm text-blue-800 bg-blue-100 rounded-full">
                          {pharmacy.hours}
                        </span>
                      </div>

                      <div className="flex items-center mb-3 text-gray-700">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 w-5 h-5 text-blue-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{pharmacy.address}</span>
                      </div>

                      <div className="flex items-center mb-4 text-gray-700">
                        <Phone className="mr-2 text-blue-600" size={18} />
                        <span>{pharmacy.phone}</span>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 py-2 font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                          Заказать доставку
                        </button>
                        <button className="flex-1 py-2 font-medium text-blue-600 bg-white rounded-lg border border-blue-600 transition-colors hover:bg-blue-50">
                          Построить маршрут
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-5 mt-8 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="flex items-center mb-3 font-bold text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Важная информация:
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        В Ростове действует программа льготного лекарственного
                        обеспечения
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Электронные рецепты можно получить у лечащего врача
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>
                        Сервис доставки лекарств доступен через приложение
                        "Аптека Ростова"
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Советы безопасности */}
            {activeTab === "safety" && (
              <div className="p-6 bg-white rounded-2xl shadow-lg">
                <h2 className="flex items-center mb-6 text-2xl font-bold text-blue-900">
                  <Shield className="mr-2 text-blue-600" size={24} />
                  Советы по безопасности
                </h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {safetyTips.map((tip) => (
                    <div
                      key={tip.id}
                      className="p-5 rounded-xl border border-blue-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-center mb-4">
                        <span className="mr-3 text-3xl">{tip.icon}</span>
                        <h3 className="text-lg font-bold">{tip.title}</h3>
                      </div>

                      <ul className="space-y-3">
                        {tip.tips.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="mt-2 mr-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="p-5 mt-8 bg-blue-50 rounded-xl border border-blue-200">
                  <h3 className="flex items-center mb-3 font-bold text-blue-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 w-5 h-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Экстренные ситуации:
                  </h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-blue-600">
                        При пожаре:
                      </span>
                      <span>
                        Покиньте помещение, вызовите 101, предупредите соседей
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-blue-600">
                        При укусе клеща:
                      </span>
                      <span>
                        Не удаляйте самостоятельно, обратитесь в травмпункт
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2 font-bold text-blue-600">
                        При отравлении:
                      </span>
                      <span>
                        Вызовите 103, сохраните упаковку от продукта/лекарства
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/3">
            <div className="sticky top-5 p-6 bg-white rounded-2xl shadow-lg">
              <div className="mb-8">
                <h2 className="flex items-center mb-4 text-xl font-bold text-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-5 h-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Экологическая обстановка
                </h2>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Качество воздуха</span>
                      <span className="font-medium text-green-600">
                        Хорошее
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Уровень пыли</span>
                      <span className="font-medium text-yellow-600">
                        Умеренный
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-yellow-500 rounded-full"
                        style={{ width: "45%" }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">Радиационный фон</span>
                      <span className="font-medium text-green-600">Норма</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-2 bg-green-500 rounded-full"
                        style={{ width: "15%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="flex items-center mb-4 text-xl font-bold text-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-5 h-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                  Полезные ресурсы
                </h2>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">🌐</span>
                      <span>Минздрав Ростовской области</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">📱</span>
                      <span>Приложение "Здоровье Ростова"</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">🏥</span>
                      <span>Запись к врачу онлайн</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      <span className="mr-2">📞</span>
                      <span>Горячая линия здравоохранения</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="flex items-center mb-4 text-xl font-bold text-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 w-5 h-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Важные телефоны
                </h2>

                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Токсикологический центр
                    </span>
                    <span className="font-medium">8863-267-20-20</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Стоматологическая помощь
                    </span>
                    <span className="font-medium">8863-240-60-40</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">
                      Служба спасения на воде
                    </span>
                    <span className="font-medium">8863-262-34-30</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Управление ГО и ЧС</span>
                    <span className="font-medium">8863-240-89-10</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Кнопка возврата */}
        <div className="mt-12">
          <button
            onClick={() => router.push("/")}
            className="py-3 px-8 font-medium text-white bg-blue-600 rounded-xl shadow-md transition-colors hover:bg-blue-700"
          >
            Вернуться на главную
          </button>
        </div>
      </section>
    </Animation>
  );
}
