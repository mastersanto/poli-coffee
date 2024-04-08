import Header from "@/components/header";
import Footer from "@/components/footer";
import Button from "@/components/atoms/button";
import ImagesFrieze from "@/components/molecules/imagesFrieze";
import Features from "@/components/molecules/features";

import imagesFriezeData from "@/data/imagesFriezeData.json";

import "./page.css";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <main>
        <section className="section">
          <div>
            <h1 className="text-4xl font-bold text-center mt-12">
              café que inspira y nunca expira
            </h1>
            <p>
              Descubre la magia en cada café que hacemos con alma y pasión{" "}
              <br />
              disfruta de cada uno de ellos en nuestro catalogo
            </p>
            <Button text="Explorar productos" />
          </div>
          <ImagesFrieze images={imagesFriezeData} />
        </section>
        <hr />
        <section className="section">
          <Features />
        </section>
        <hr />
        <section className="section">
          <h3>El verdadero café Colombiano</h3>
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
    </div>
  );
}
