import React from "react";
import { Image } from "cloudinary-react";

const CloudImage = ({ name, className, width, height }) => {
  return (
    <Image
      cloudName="uniodds"
      publicId={`icon-${name}.png`}
      className={className}
      quality="auto"
      width={width}
      crop="scale"
    />
  );
};

CloudImage.defaultProps = {
  width: "32",
};

export default CloudImage;
