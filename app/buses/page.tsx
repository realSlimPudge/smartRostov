"use client";
import Animation from "@/components/Animation/Animation";
import {
    ChevronLeft,
    Compass,
    Footprints,
    MapPin,
    Mountain,
    Route,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RoutesPage() {
    const router = useRouter();
    const [activeRoute, setActiveRoute] = useState<number | null>(null);

    const routes = [
        {
            id: 1,
            title: "Историческое сердце города",
            type: "Пеший",
            duration: "2 часа",
            length: "4 км",
            description:
                "Погружение в историю Ростова через его главные архитектурные жемчужины",
            highlights: [
                "Большая Садовая улица",
                "Собор Рождества Пресвятой Богородицы",
                "Парамоновские склады",
                "Ростовский краеведческий музей",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
        {
            id: 2,
            title: "Набережная Дона",
            type: "Велосипедный",
            duration: "1.5 часа",
            length: "7 км",
            description:
                "Живописная прогулка вдоль главной водной артерии юга России",
            highlights: [
                "Стела Освободителям Ростова",
                "Ростовский речной вокзал",
                "Памятник Ростовчанке",
                "Парк им. Вити Черевичкина",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
        {
            id: 3,
            title: "Зелёный маршрут",
            type: "Пеший",
            duration: "3 часа",
            length: "6 км",
            description: "Оазисы природы в центре миллионного города",
            highlights: [
                "Парк им. Горького",
                "Ботанический сад ЮФУ",
                "Парк Дружба",
                "Сквер им. Кирова",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
        {
            id: 4,
            title: "Архитектурный Ростов",
            type: "Автобусно-пеший",
            duration: "4 часа",
            length: "12 км",
            description:
                "Эклектика стилей от купеческих особняков до советского конструктивизма",
            highlights: [
                "Здание Городской Думы",
                "Дом Маргариты Черновой",
                "Театр драмы им. Горького",
                "Жилой дом 'Пяти углов'",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
        {
            id: 5,
            title: "Ливенцовская крепость",
            type: "Автомобильный",
            duration: "5 часов",
            length: "25 км",
            description: "Путешествие к древнейшей крепости Европы бронзового века",
            highlights: [
                "Археологический комплекс",
                "Панорама дельты Дона",
                "Музей под открытым небом",
                "Смотровые площадки",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
        {
            id: 6,
            title: "Пушкинская улица",
            type: "Пеший",
            duration: "1 час",
            length: "2 км",
            description:
                "Прогулка по самой красивой улице города - музею под открытым небом",
            highlights: [
                "Памятник Пушкину",
                "Фонтан 'Ростов'",
                "Дом Шпильрейн",
                "Парк Революции",
            ],
            mapSrc:
                "https://yandex.ru/map-widget/v1/?um=constructor%3Aad187035883644adfd127081a96cb30dcbef51c1bac44ee30846fb2a6a2514f9&amp;source=constructor",
        },
    ];

    const selectedRoute = routes.find((r) => r.id === activeRoute);

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
                            Туристические маршруты Ростова
                        </h1>
                        <p className="mt-2 text-blue-700">
                            Откройте для себя южную столицу России по-новому
                        </p>
                    </div>
                </div>

                {/* Основной контент */}
                <div className="flex flex-col gap-8 px-4 w-full max-w-6xl lg:flex-row">
                    {/* Список маршрутов */}
                    <div className="w-full lg:w-2/3">
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {routes.map((route) => (
                                <div
                                    key={route.id}
                                    className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border ${activeRoute === route.id
                                            ? "border-blue-500 border-2"
                                            : "border-blue-100"
                                        }`}
                                    onClick={() => setActiveRoute(route.id)}
                                >
                                    <div className="p-5 text-white bg-gradient-to-r from-blue-600 to-blue-800">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h2 className="text-xl font-bold">{route.title}</h2>
                                                <p className="mt-1 text-sm text-blue-200">
                                                    {route.description}
                                                </p>
                                            </div>
                                            <div className="flex gap-2 items-center py-1 px-3 bg-blue-900 rounded-full">
                                                {route.type === "Пеший" && <Footprints size={18} />}
                                                {route.type === "Велосипедный" && <Route size={18} />}
                                                {route.type === "Автомобильный" && (
                                                    <Compass size={18} />
                                                )}
                                                {route.type === "Автобусно-пеший" && (
                                                    <Mountain size={18} />
                                                )}
                                                <span className="text-sm">{route.type}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-5">
                                        <div className="flex gap-4 mb-4">
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-1 w-5 h-5 text-blue-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="font-medium">{route.duration}</span>
                                            </div>
                                            <div className="flex items-center text-gray-700">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="mr-1 w-5 h-5 text-blue-600"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span className="font-medium">{route.length}</span>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <h3 className="flex items-center mb-3 font-semibold text-gray-800">
                                                <MapPin className="mr-2 text-blue-600" size={18} />
                                                Ключевые точки маршрута:
                                            </h3>
                                            <ul className="space-y-2">
                                                {route.highlights.map((point, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mt-2 mr-2 w-2 h-2 bg-blue-500 rounded-full"></span>
                                                        <span className="text-gray-600">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <button className="flex justify-center items-center py-2.5 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="mr-2 w-5 h-5"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            Скачать маршрут в PDF
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Советы туристам */}
                        <div className="p-8 mt-10 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl">
                            <h2 className="mb-6 text-2xl font-bold text-center">
                                Полезные советы для исследователей
                            </h2>

                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="p-5 rounded-xl bg-blue-600/30 backdrop-blur-sm">
                                    <h3 className="flex items-center mb-2 text-lg font-bold">
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
                                        Лучшее время
                                    </h3>
                                    <p>
                                        Апрель-май и сентябрь-октябрь - идеальная погода для пеших
                                        прогулок. Летом планируйте маршруты на утро или вечер.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-blue-600/30 backdrop-blur-sm">
                                    <h3 className="flex items-center mb-2 text-lg font-bold">
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
                                        Безопасность
                                    </h3>
                                    <p>
                                        Используйте официальное такси или мобильные приложения.
                                        Держите ценные вещи во внутренних карманах в людных местах.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-blue-600/30 backdrop-blur-sm">
                                    <h3 className="flex items-center mb-2 text-lg font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                                        </svg>
                                        Что взять с собой
                                    </h3>
                                    <p>
                                        Удобная обувь, бутылка воды, солнцезащитные очки и крем,
                                        портативный аккумулятор для телефона.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-blue-600/30 backdrop-blur-sm">
                                    <h3 className="flex items-center mb-2 text-lg font-bold">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="mr-2 w-5 h-5"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Навигация
                                    </h3>
                                    <p>
                                        Скачайте офлайн-карты Ростова. Все маршруты доступны в
                                        мобильном приложении {'"Турист Ростова"'}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Карта и выбранный маршрут */}
                    <div className="w-full lg:w-1/3">
                        <div className="sticky top-5 p-6 bg-white rounded-2xl shadow-lg">
                            <h2 className="flex items-center pb-2 mb-6 text-xl font-bold text-blue-900 border-b border-blue-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="mr-2 w-5 h-5 text-blue-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.586 1.586a1 1 0 001.414 0l1-1a1 1 0 000-1.414L3.707 3.293zm9.293 9.293a1 1 0 00-1.414 0l-1 1a1 1 0 000 1.414l1.586 1.586a1 1 0 001.414 0l1-1a1 1 0 000-1.414l-1.586-1.586z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                Маршрут на карте
                            </h2>

                            {selectedRoute ? (
                                <div>
                                    <h3 className="mb-3 text-lg font-bold">
                                        {selectedRoute.title}
                                    </h3>
                                    <div className="overflow-hidden relative mb-4 w-full h-72 rounded-xl border-2 border-blue-200">
                                        <iframe
                                            src={selectedRoute.mapSrc}
                                            width="100%"
                                            height="100%"
                                            frameBorder="0"
                                            title="Маршрут на карте"
                                            loading="lazy"
                                        ></iframe>
                                    </div>
                                    <button className="py-2.5 w-full font-medium text-white bg-blue-600 rounded-lg transition-colors hover:bg-blue-700">
                                        Построить маршрут в навигаторе
                                    </button>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-center items-center py-10 text-center">
                                    <Compass className="mb-4 text-blue-300" size={48} />
                                    <p className="font-medium text-blue-800">
                                        Выберите маршрут для просмотра на карте
                                    </p>
                                    <p className="mt-2 text-gray-500">
                                        Нажмите на любой маршрут слева, чтобы увидеть его на карте
                                    </p>
                                </div>
                            )}

                            {/* Популярные точки */}
                            <div className="mt-8">
                                <h3 className="flex items-center mb-3 font-bold text-blue-900">
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
                                    Топ-5 мест Ростова
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <span className="mr-2 w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Набережная Дона
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="mr-2 w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Театральная площадь
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="mr-2 w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Пушкинская улица
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="mr-2 w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Парк им. Горького
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="mr-2 w-3 h-3 bg-blue-500 rounded-full"></span>
                                        Собор Рождества Пресвятой Богородицы
                                    </li>
                                </ul>
                            </div>

                            {/* Статистика */}
                            <div className="p-5 mt-8 bg-blue-50 rounded-xl border border-blue-200">
                                <h3 className="mb-3 font-bold text-blue-800">
                                    Факты о Ростове:
                                </h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-600">•</span>
                                        <span>
                                            Основан в 1749 году по указу императрицы Елизаветы
                                            Петровны
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-600">•</span>
                                        <span>
                                            Население: более 1.1 млн человек (10-й город России)
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-600">•</span>
                                        <span>Средняя температура летом: +25°C, зимой: -3°C</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-2 text-blue-600">•</span>
                                        <span>Длина набережной Дона: 2 км</span>
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
