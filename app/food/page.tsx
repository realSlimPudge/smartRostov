"use client";
import Animation from "@/components/Animation/Animation";
import { ChevronLeft, Clock, MapPin, Utensils } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FoodPage() {
    const router = useRouter();

    const restaurants = [
        {
            id: 1,
            name: "Казачий курень",
            type: "Донская кухня",
            description: "Аутентичная казачья кухня на берегу Дона",
            address: "ул. Левобережная, 5",
            hours: "12:00 - 00:00",
            price: "Средний чек: 2500 руб.",
            features: [
                "Пироги с икрой сазана",
                "Уха с карпом",
                "Казачьи песни",
            ],
            highlight: "Лучший ресторан донской кухни по версии GQ 2025",
        },
        {
            id: 2,
            name: "La Fabbrica",
            type: "Итальянская кухня",
            description: "Итальянская кухня от бренд-шефа Мирко Дзаго",
            address: "ул. Красноармейская, 168/99",
            hours: "11:00 - 00:00",
            price: "Средний чек: 3000 руб.",
            features: [
                "Римская пицца",
                "Паста ручной работы",
                "Сезонные морепродукты",
            ],
            highlight: "Проект Аркадия Новикова в здании табачной фабрики",
        },
        {
            id: 3,
            name: "Раки и гады",
            type: "Морепродукты",
            description: "32 рецепта приготовления донских раков",
            address: "ул. Шаумяна, 57",
            hours: "12:00 - 00:00",
            price: "Средний чек: 2800 руб.",
            features: [
                "Раки по-донски",
                "Мидии со сливками",
                "Паэлья с морепродуктами",
            ],
            highlight: "Must visit для ценителей речных деликатесов",
        },
        {
            id: 4,
            name: "ОнегинДача",
            type: "Русская кухня",
            description: "Русская кухня с дворянским размахом",
            address: "пр-т Чехова, 45Б",
            hours: "08:00 - 00:00",
            price: "Средний чек: 3200 руб.",
            features: [
                "Уха со стерлядью",
                "Фирменный оливье",
                "Завтраки до 14:00",
            ],
            highlight: "Лучший региональный ресторан России 2024",
        },
        {
            id: 5,
            name: "Leo Wine & Kitchen",
            type: "Винный бар",
            description: "Винный бар с локальной кухней юга России",
            address: "ул. Максима Горького, 195",
            hours: "13:00 - 23:00",
            price: "Средний чек: 2200 руб.",
            features: [
                "Тартар из говядины",
                "Томленые щёчки",
                "Авторские винные пейринги",
            ],
            highlight: "TOP-1000 ресторанов мира по версии La Liste",
        },
        {
            id: 6,
            name: "Бистро Гаврош",
            type: "Французское бистро",
            description: "Лучшие завтраки города по версии ростовчан",
            address: "ул. Пушкинская, 36",
            hours: "07:00 - 00:00",
            price: "Средний чек: 1200 руб.",
            features: [
                "Воздушные круассаны",
                "Авторские омлеты",
                "Сезонная выпечка",
            ],
            highlight: "Место, куда прилетают на завтрак из Москвы",
        },
    ];

    return (
        <Animation>
            <section className="flex flex-col justify-center items-center py-10 pt-20 w-screen min-h-screen bg-gradient-to-b from-amber-50 to-white">
                {/* Заголовок и кнопка назад */}
                <div className="flex gap-x-5 justify-start items-center px-4 pb-10 w-full max-w-6xl">
                    <button
                        className="flex justify-center items-center p-2 text-white bg-amber-600 rounded-md transition-colors cursor-pointer hover:bg-amber-700"
                        onClick={() => router.back()}
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <div>
                        <h1 className="text-3xl font-bold text-amber-900 md:text-4xl">
                            Гастрономический Ростов
                        </h1>
                        <p className="mt-2 text-amber-700">
                            Топ-ресторанов южной столицы России
                        </p>
                    </div>
                </div>

                {/* Список ресторанов */}
                <div className="grid grid-cols-1 gap-8 px-4 mb-16 w-full max-w-6xl md:grid-cols-2 lg:grid-cols-3">
                    {restaurants.map((restaurant) => (
                        <div
                            key={restaurant.id}
                            className="overflow-hidden bg-white rounded-2xl border border-amber-100 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="p-6 text-white bg-gradient-to-r from-amber-500 to-amber-600">
                                <div className="flex gap-3 items-start">
                                    <div className="p-3 bg-amber-700 rounded-lg">
                                        <Utensils
                                            className="text-amber-100"
                                            size={24}
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">
                                            {restaurant.name}
                                        </h2>
                                        <p className="font-medium text-amber-100">
                                            {restaurant.type}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="mb-4 italic text-gray-700">
                                    {restaurant.highlight}
                                </p>

                                <div className="mb-5 space-y-3">
                                    <div className="flex items-center text-gray-700">
                                        <MapPin
                                            size={18}
                                            className="mr-2 text-amber-600 min-w-[24px]"
                                        />
                                        <span>{restaurant.address}</span>
                                    </div>
                                    <div className="flex items-center text-gray-700">
                                        <Clock
                                            size={18}
                                            className="mr-2 text-amber-600 min-w-[24px]"
                                        />
                                        <span>{restaurant.hours}</span>
                                    </div>
                                    <p className="font-medium text-amber-700">
                                        {restaurant.price}
                                    </p>
                                </div>

                                <div className="mb-6">
                                    <h3 className="pb-2 mb-3 font-semibold text-gray-800 border-b border-amber-200">
                                        Попробуйте обязательно:
                                    </h3>
                                    <ul className="space-y-2">
                                        {restaurant.features.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-start"
                                                >
                                                    <span className="mt-2 mr-2 w-2 h-2 bg-amber-500 rounded-full"></span>
                                                    <span className="text-gray-600">
                                                        {feature}
                                                    </span>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>

                                <button className="py-3 w-full font-medium text-white bg-amber-600 rounded-lg transition-colors hover:bg-amber-700">
                                    Забронировать столик
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Карта ресторанов */}
                <div className="px-4 mb-16 w-full max-w-6xl">
                    <div className="p-6 bg-white rounded-2xl border border-amber-100 shadow-xl">
                        <h2 className="pb-2 mb-6 text-2xl font-bold text-center text-amber-900 border-b border-amber-200">
                            Рестораны на карте Ростова
                        </h2>
                        <div className="overflow-hidden relative w-full h-96 rounded-xl border-2 border-amber-200">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3A313358368eb6f7bbee1da032ca20f1fa48cf6448f6d3e81aa84f6e6f3eed7e1c&amp;source=constructor"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="Карта ресторанов Ростова-на-Дону"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Гастрономические советы */}
                <div className="px-4 w-full max-w-6xl">
                    <div className="p-8 text-white bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl">
                        <h2 className="mb-6 text-2xl font-bold text-center">
                            Советы настоящим гурманам
                        </h2>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="p-5 rounded-xl bg-amber-600/30 backdrop-blur-sm">
                                <h3 className="flex items-center mb-2 text-lg font-bold">
                                    <span className="mr-2 text-xl">🍷</span>{" "}
                                    Напитки
                                </h3>
                                <p>
                                    Попробуйте местные вина из цимлянских
                                    виноградников - особенно рекомендуем{" "}
                                    {'"Цимлянское чёрное"'} и {'"Платовское"'}
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-amber-600/30 backdrop-blur-sm">
                                <h3 className="flex items-center mb-2 text-lg font-bold">
                                    <span className="mr-2 text-xl">🦞</span>{" "}
                                    Сезонные деликатесы
                                </h3>
                                <p>
                                    Сезон донских раков длится с апреля по
                                    ноябрь - лучшие места для дегустации:{" "}
                                    {'"Раки и гады"'} и {'"Казачий курень"'}
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-amber-600/30 backdrop-blur-sm">
                                <h3 className="flex items-center mb-2 text-lg font-bold">
                                    <span className="mr-2 text-xl">🌅</span>{" "}
                                    Бронирование
                                </h3>
                                <p>
                                    Рекомендуем бронировать столики на верандах
                                    заведений заранее - особенно в{" "}
                                    {'"ОнегинДаче"'}и La Fabbrica
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-amber-600/30 backdrop-blur-sm">
                                <h3 className="flex items-center mb-2 text-lg font-bold">
                                    <span className="mr-2 text-xl">🍳</span>{" "}
                                    Завтраки
                                </h3>
                                <p>
                                    Не пропустите завтраки в {'"Бистро Гаврош"'}{" "}
                                    - их круассаны считаются лучшими на юге
                                    России
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Кнопка возврата */}
                <div className="mt-12">
                    <button
                        onClick={() => router.push("/")}
                        className="py-3 px-8 font-medium text-white bg-amber-600 rounded-xl shadow-md transition-colors hover:bg-amber-700"
                    >
                        Вернуться на главную
                    </button>
                </div>
            </section>
        </Animation>
    );
}
