import Image from "next/image";

import "./products.css";

const Products = () => {
  const products = [
    {
      image: "/product-1.png",
      title: "Chocolate Latte",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
    {
      image: "/product-2.png",
      title: "Mocha Latte",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
    {
      image: "/product-3.png",
      title: "Coffee Latte",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
    {
      image: "/product-4.png",
      title: "Hazelnut Latte",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
  ];
  return (
    <div className="products">
      <div className="products-header">
        <h3 className="products-title">Nuestros Productos</h3>
        <p className="products-subtitle">El verdadero café Colombiano</p>
      </div>
      <div className="products-filters">
        <button className="products-filter products-filter--active">
          Latte
        </button>
        <button className="products-filter">Robusta</button>
        <button className="products-filter">Acabica</button>
      </div>
      <ul className="products-list">
        {products.map((product, index) => (
          <li key={index} className="products-item">
            <Image
              className="products-item--image"
              src={product.image}
              alt={product.title}
              width="302"
              height="240"
            />
            <div className="products-item--content">
              <h3 className="products-item--title">{product.title}</h3>
              <p className="products-item--description">
                {product.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
