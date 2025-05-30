"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Home() {
  const data = [
    {
      title: "В каком районе дышится проще?",
      link: "breath",
      img: "/Rayon.png",
      delay: 0,
    },
    {
      title: "Где сегодня припарковаться?",
      link: "parking",
      img: "/Parking.png",
      delay: 0.1,
    },
    {
      title: "Каким маршрутом доехать до дома?",
      link: "buses",
      img: "/Bus.png",
      delay: 0.2,
    },
    {
      title: "Где вкусно поесть в Ростове?",
      link: "food",
      img: "/Raki.png",
      delay: 0.3,
    },
  ];

  const subButtons = [
    {
      title: "Голосуем за реконструкцию парка",
      link: "/parks",
      icon: "Park.svg",
      delay: 0,
    },
    {
      title: "Куда сходить на выходных?",
      link: "/weekend",
      icon: "Theatr.svg",
      delay: 0.1,
    },
    {
      title: "Самые денежные места Ростова",
      link: "/money",
      icon: "Mask.svg",
      delay: 0.2,
    },
    {
      title: "Здоровье и безопасность",
      link: "/health",
      icon: "Health.svg",
      delay: 0.3,
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center mx-auto pt-120 max-w-3/4">
        {data.map((card, i) => (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: card.delay }}
            key={i}
            className="overflow-hidden rounded-2xl shadow-sm max-w-[300px] max-h-[400px] group"
          >
            {" "}
            <Link href={card.link} className="w-full h-full">
              <div className="relative">
                <div className="overflow-hidden w-full h-3/4">
                  <img
                    className="w-full h-full transition duration-300 scale-[1.09] ease group-hover:scale-[1.03]"
                    src={card.img}
                    alt={card.link}
                  />
                </div>
                <div className="absolute flex justify-start items-center px-3 w-full h-1/4 text-black bg-white rounded-2xl transform translate-y-[-100%] rounded-t-none">
                  <h4 className="text-xl font-semibold transition duration-200 group-hover:text-blue-500 text-start ease">
                    {card.title}
                  </h4>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-between items-center pt-10 mx-auto max-w-3/4">
        {subButtons.map((el, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: el.delay }}
            className="flex justify-between items-center py-3 px-4 text-white bg-blue-500 rounded-2xl w-[300px] min-w-[300px]"
          >
            <img src={el.icon} />
            <Link href={el.link} className="w-2/3">
              <h5 className="font-medium text-md">{el.title}</h5>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
