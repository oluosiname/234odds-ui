import React from "react";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

const CloudImage = ({ name, className }) => {
  return (
    <Image
      cloudName="uniodds"
      publicId={`icon-${name}.webp`}
      className={className}
      quality="10"
      width="50"
    />
  );
};

export default CloudImage;
