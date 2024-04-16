import Image from "next/image";

import "./features.css";

const Features = () => {
  const features = [
    {
      image: "/features-1.png",
      title: "Manos colombianas",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
    {
      image: "/features-2.png",
      title: "Cuidamos el medio ambiente",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
    {
      image: "/features-3.png",
      title: "Café de la mas alta calidad",
      description:
        "Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringillaLorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla",
    },
  ];
  return (
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index} className="features-item">
          <Image
            className="features-item--image"
            src={feature.image}
            alt={feature.title}
            width="200"
            height="200"
          />
          <h3 className="features-item--title">{feature.title}</h3>
          <p className="features-item--description">{feature.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Features;
