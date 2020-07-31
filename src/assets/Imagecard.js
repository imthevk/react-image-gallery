import React from "react";

export default function Imagecard({ image }) {
  const tags = image.tags.split(" ,");
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="" className="w-full" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
          </div>
          <ul>
            <li>
              <span>Views:</span>
              <strong>{image.views}</strong>
            </li>
            <li>
              <span>Downloads:</span>
              <strong>{image.downloads}</strong>
            </li>
            <li>
              <span>Likes:</span>

              <strong>{image.likes}</strong>
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {tags.map((tag) => (
            <span
              key={image.id}
              className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 "
            >
              {tag}
            </span>
          ))}
          {/* 
          <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
            {image.tags[0]}
          </span>
          <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
            {image.tags[1]}
          </span>
          <span className="inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700 mr-2 ">
            {image.tags[2]}
          </span> */}
        </div>
      </div>
    </div>
  );
}
