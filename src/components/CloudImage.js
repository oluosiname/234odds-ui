import React from "react";
import { Image } from "cloudinary-react";

const CloudImage = ({ name, className }) => {
  return (
    <Image
      cloudName="uniodds"
      publicId={`icon-${name}.png`}
      className={className}
      quality="auto"
      width="32"
      height="36"
      crop="scale"
    />
  );
};

export default CloudImage;
