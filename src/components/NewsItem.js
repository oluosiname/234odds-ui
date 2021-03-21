import React from "react";

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
      className="flex overflow-hidden rounded bg-gray-300 flex-wrap min-h-28"
    >
      <div className="w-1/3 md:w-full portrait:w-full lg:w-1/3">
        <img
          src={image.url}
          alt={image.caption}
          className="min-h-full object-cover"
        />
      </div>
      <div className="w-2/3 md:w-full portrait:w-full lg:w-2/3 py-3 px-3">
        <div className="text-white text-sm">{article.headline}</div>
        <div className="text-xs pt-3 hidden lg:block">{description}</div>
      </div>
    </a>
  );
};

NewsItem.propTypes = {};

export default NewsItem;
