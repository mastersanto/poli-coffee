import Image from "next/image";

import "./imageTile.css";

export type ImageTileProps = {
  alt: string;
  src: string;
};

const ImageTile = (props: ImageTileProps) => {
  const { alt, src } = props;

  return (
    <div className="image-tile">
      <Image
        className="image-tile"
        src={src}
        alt={alt}
        width="500"
        height="700"
      />
    </div>
  );
};

export default ImageTile;
