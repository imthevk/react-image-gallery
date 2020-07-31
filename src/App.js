import React, { useState, useEffect } from "react";
import "./App.css";
import ImageCard from "./assets/Imagecard";
import SearchImages from "./SearchImages";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=17516176-c4d69357c41986940657f7331&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setImages(data.hits);
        setIsLoading(false);
        // console.log(setIsLoading(true));
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <>
      <SearchImages searchText={(text) => setTerm(text)} />

      <div className="container mx-auto">
        {!isLoading && images.length === 0 && (
          <h1 className="text-4xl text-center mx-auto mt-32 ">
            Image not found.
          </h1>
        )}
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32 ">Loading...</h1>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
