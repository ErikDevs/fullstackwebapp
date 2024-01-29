import React from "react";

const SmallProduct = () => {
  return (
    <div className="small-images-container">
      {item.image.map((item, i) => (
        <img
          src={urlForImage(item)}
          className={i === index ? "small-image selected-image" : "small-image"}
          alt="small"
          onClick={updateIndex(i)}
        />
      ))}
    </div>
  );
};

export default SmallProduct;
