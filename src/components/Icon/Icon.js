import React from "react";
import PropTypes from "prop-types";
import iconMap from "../../assets/icons/icon-map";
import { ReactComponent as IconEngland } from "../../assets/images/icon-england.svg";

const Icon = ({ name, size, color, ...rest }) => {
  const Icon = iconMap[name] || IconEngland;
  return <Icon color={color} style={{ width: size, height: size }} {...rest} />;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: "1rem",
};

export default Icon;
