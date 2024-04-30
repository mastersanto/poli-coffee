"use client";

import Image from "next/image";
import Link from "next/link";

import { CgProfile } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";
import "./header.css";

type headerProps = {
  toggleModal?: (e: any) => void;
};

export default function Header(props: headerProps) {
  const { toggleModal } = props;

  return (
    <header className="header">
      <div className="header-logo">
        <Image
          src="/logo-poli-coffee.png"
          alt="coffee cup"
          width={69}
          height={75}
        />
      </div>
      <nav className="header-nav">
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
      <CiSearch className="self-center h-[18px] w-[18px]" />
      <Link href="#" onClick={toggleModal}>
        <CgProfile
          // onClick={toggleModal}
          className="self-center h-[18px] w-[18px]"
        />
      </Link>
    </header>
  );
}
