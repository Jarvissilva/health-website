import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-5 border-t border-gray-200 px-[clamp(1rem,5vw,4rem)] py-8">
      <nav>
        <ul className="flex flex-wrap justify-center gap-4 capitalize">
          <li>
            <Link href="/" className="text-lg font-normal hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-lg font-normal hover:text-blue-600"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-normal hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/disclaimer"
              className="text-lg font-normal hover:text-blue-600"
            >
              Disclaimer
            </Link>
          </li>
          <li>
            <Link
              href="/privacy-policy"
              className="text-lg font-normal hover:text-blue-600"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-center gap-4">
        <Link
          className="bg-black p-2 hover:text-white rounded-full text-white hover:scale-110"
          href="https://www.instagram.com/hostwizly"
        >
          <FaInstagram size={25} />
        </Link>
        <Link
          className="bg-black p-2 hover:text-white rounded-full text-white hover:scale-110"
          href="https://t.me/hostwizly"
        >
          <FaTelegram size={25} />
        </Link>
        <Link
          className="bg-black p-2 hover:text-white rounded-full text-white hover:scale-110"
          href="https://www.facebook.com/hostwizly"
        >
          <FaFacebook size={25} />
        </Link>
        <Link
          className="bg-black p-2 hover:text-white rounded-full text-white hover:scale-110"
          href="https://www.youtube.com/@hostwizly"
        >
          <FaYoutube size={25} />
        </Link>
        <Link
          className="bg-black p-2 hover:text-white rounded-full text-white hover:scale-110"
          href="https://www.linkedin.com/company/hostwizly"
        >
          <FaLinkedin size={25} />
        </Link>
      </div>
    </footer>
  );
}
