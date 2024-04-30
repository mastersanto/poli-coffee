"use client";

import Button from "@/components/atoms/button";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Features from "@/components/molecules/features";
import ImagesFrieze from "@/components/molecules/imagesFrieze";
import LoginModal from "@/components/molecules/loginModal";
import Products from "@/components/molecules/products";

import imagesFriezeData from "@/data/imagesFriezeData.json";

import { useState } from "react";
import "./page.css";

export default function Home() {
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false);

  const handleLogin = (event: any) => {
    event.preventDefault();
    console.log("Login");
  };

  const toggleLoginModal = (event: any) => {
    console.log("toggleLoginModal");
    setIsLoginModalOpened(!isLoginModalOpened);
  };

  return (
    <div className="container">
      <Header toggleModal={(e: any) => toggleLoginModal(e)} />
      <main>
        <section className="section">
          <div className="explore-products">
            <h1 className="explore-products--title">
              café que inspira y nunca expira
            </h1>
            <p className="explore-products--description">
              Descubre la magia en cada café que hacemos con alma y pasión{" "}
              <br />
              disfruta de cada uno de ellos en nuestro catalogo
            </p>
            <Button
              className="explore-products--button"
              text="Explorar productos"
            />
          </div>
          <ImagesFrieze images={imagesFriezeData} />
        </section>
        <hr />
        <section className="section">
          <Features />
        </section>
        <hr />
        <section className="section">
          <Products />
        </section>
        <hr />
        <section className="section">
          <h3>¿Por qué somos lo que somos?</h3>
        </section>
        <hr />
        <section className="section">
          <h3>Nuestro café habla por nosotros</h3>
        </section>
      </main>
      <Footer />
      {isLoginModalOpened && (
        <LoginModal
          isOpen={isLoginModalOpened}
          confirmLogin={(e: any) => handleLogin(e)}
          toggleModal={(e: any) => toggleLoginModal(e)}
        />
      )}
    </div>
  );
}
