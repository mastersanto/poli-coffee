import Image from "next/image";
import Link from "next/link";

import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <Image src="/vercel.svg" alt="coffee cup" width={50} height={50} />
      PoliCoffee
      <nav className="nav">
        <ul>
          <li>
            <Link href="#">Productos</Link>
          </li>
          <li>
            <Link href="#">Acerca de nosotros</Link>
          </li>
          <li>
            <Link href="#">Reseñas</Link>
          </li>
          <li>
            <Link href="#">Contacto</Link>
          </li>
        </ul>
      </nav>
      <CiSearch className="h-[18px] w-[18px]" />
      <CgProfile className="h-[18px] w-[18px]" />
    </header>
  );
}
