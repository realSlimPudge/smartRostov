import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex flex-col gap-y-4 justify-center items-center">
        <h1 className="text-[64px]">Ошибка 404</h1>
        <p className="text-center">Похоже такой страницы не существует</p>

        <Link
          href={"/"}
          className="py-4 mt-3 text-xl text-center text-white bg-blue-500 rounded-2xl px-30"
        >
          Главная
        </Link>
      </div>
    </div>
  );
}
