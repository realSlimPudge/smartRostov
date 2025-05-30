import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-screen text-black bg-white border-b border-blue-300 z-90">
      <div className="flex justify-between items-center py-3 px-5">
        <h1 className="text-2xl">
          <Link href={"/"}>
            Ростов<span className="font-bold text-blue-700">Smart</span>
          </Link>
        </h1>
      </div>
    </header>
  );
}
