import React from "react";
import { Image } from "cloudinary-react";

const CloudImage = ({ name, className, width, height, fallback }) => {
  return (
    <Image
      cloudName="uniodds"
      publicId={`icon-${name}.png`}
      className={className}
      quality="auto"
      width={width}
      crop="scale"
      defaultImage={`icon-${fallback}.png`}
    />
  );
};

CloudImage.defaultProps = {
  width: "32",
  fallback: "club",
};

export default CloudImage;
