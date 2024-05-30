import React from "react";
import { formatDate } from "../utils/date";

const ArticleCard = ({ article }) => {
  const { title, description, urlToImage, url, publishedAt, source } = article;
  return (
    <>
      <div className="p-4 sm:w-1/1 md:w-1/2 lg:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img
            className="lg:h-48 md:h-36 w-full object-cover object-center"
            src={
              urlToImage ??
              "https://answers-afd.microsoft.com/static/images/image-not-found.jpg"
            }
            alt="image"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              {source?.name}
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {title}
            </h1>
            <p className="leading-relaxed mb-3">{description}</p>
            <div className="flex items-center flex-wrap ">
              <a
                className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 cursor-pointer"
                href={url}
                target="_blank"
              >
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                {formatDate(publishedAt)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleCard;
