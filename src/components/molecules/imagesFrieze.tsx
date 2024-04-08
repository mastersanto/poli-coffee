import ImageTile from "../atoms/imageTile";
import type { ImageTileProps } from "../atoms/imageTile";

import "./imagesFrieze.css";

type ImagesFriezeProps = {
  images: ImageTileProps[];
};

const ImagesFrieze = (props: ImagesFriezeProps) => {
  const { images } = props;

  return (
    <div className="images-frieze">
      {images.map((image, index) => (
        <ImageTile key={index} alt={image.alt} src={image.src} />
      ))}
    </div>
  );
};

export default ImagesFrieze;
