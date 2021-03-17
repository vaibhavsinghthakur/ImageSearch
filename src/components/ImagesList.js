import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";
function ImagesList({ images }) {
  return (
    <div className="imageList">
      {images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
      })}
    </div>
  );
}

export default ImagesList;
