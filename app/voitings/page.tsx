import Animation from "@/components/Animation/Animation";
import Link from "next/link";

export default function Voitings() {
  const data = [
    {
      title: 'Реконструкция парка "Дружба"',
      img: "/image.png",
      link: "/park_drujba",
    },
    {
      title: "Реконструкция парка Революции",
      img: "/image(1).png",
      link: "/park_revolitia",
    },
    {
      title: '"Ростов - ЭКОгород"',
      img: "/image(2).png",
      link: "/rostov-ecocity",
    },
    {
      title: "Благоустройство Школы № 111",
      img: "/image(3).png",
      link: "/school111",
    },
  ];
  return (
    <Animation>
      <section className="pt-40 space-y-10 w-screen">
        <div className="mx-auto w-fit">
          <h1 className="p-4 px-6 text-3xl text-white bg-blue-500 rounded-2xl">
            Голосование
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-4 mx-auto w-2/3">
          {data.map((el, i) => (
            <div
              key={i}
              className="overflow-hidden relative rounded-2xl w-[370px] h-[160px] group"
            >
              <Link href={"voitings" + el.link} className="w-full h-full">
                <img
                  src={el.img}
                  alt="Голосование"
                  className="object-contain w-full h-full duration-300 group-hover:scale-100 scale-[1.03] translate ease"
                />
                <div className="absolute transform translate-y-[-100%] rounded-2xl translate-x-[-100%] top-full left-full w-3/4 p-2 px-4 bg-blue-500 text-white">
                  {el.title}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Animation>
  );
}
