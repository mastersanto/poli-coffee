import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <h1 className="text-4xl font-bold text-center mt-12">PoliCoffee</h1>
      </main>
      <Footer />
    </div>
  );
}
