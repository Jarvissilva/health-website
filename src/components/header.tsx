import Link from "next/link";
import { Redressed } from "next/font/google";
import { FiShoppingCart, FiSearch } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

export default function Header() {
  return (
    <header className="px-[clamp(1rem,5vw,5rem)] py-5 lg:py-6 space-y-5 border-b">
      <div className="frbc">
        <div>
          <Link
            href="/"
            className={`text-[clamp(2.5rem,5vw,3rem)] ${redressed.className} font-black leading-none`}
          >
            Health<span className="text-blue-600">ify</span>
          </Link>
        </div>
        <div className="w-[60%] max-lg:hidden">
          <SearchBar />
        </div>
        <div className="flex items-center gap-5">
          <button>
            <FiShoppingCart size={30} />
          </button>
          <button className="lg:hidden">
            <FiSearch size={30} />
          </button>
        </div>
      </div>
    </header>
  );
}

function SearchBar() {
  return (
    <>
      <div className="flex justify-start items-center gap-2 border border-gray-200 p-3 rounded-md">
        <CiSearch size={30} />
        <input
          type="text"
          placeholder="Search for products"
          className="w-full outline-none"
        />
      </div>
    </>
  );
}
