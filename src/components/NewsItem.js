import React from "react";
import PropTypes from "prop-types";

const NewsItem = ({ article }) => {
  const image = article.images[0];
  const description =
    article.description.length > 70
      ? `${article.description.slice(0, 70)} ...`
      : article.description;

  return (
    <a
      href={article.links.web.href}
      target="_blank"
      rel="noreferrer"
      className="flex space-x-3"
    >
      <div className="w-1/3">
        <img
          src={image.url}
          alt={image.caption}
          className="h-20 object-cover"
        />
      </div>
      <div className="w-2/3">
        <div className="text-white text-sm">{article.headline}</div>
        <div className="text-xs pt-3">{description}</div>
      </div>
    </a>
  );
};

NewsItem.propTypes = {};

export default NewsItem;
