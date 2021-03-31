import React from "react";
import classes from "./ImageCards.module.css";
import { HORIZONTAL } from "../../common/constants";

const ImageCards = (props) => {
  // Based on props calculates the image cards styling type (row/column)
  const getImageListStyle = (viewMode) => {
    if (viewMode === HORIZONTAL) {
      return classes.cardRow;
    }

    return classes.cardColumn;
  };

  return (
    <React.Fragment>
      {props.images.map((image) => {
        return (
          <div key={image.imageId} className={getImageListStyle(props.viewMode)}>
            <img className={classes.image} src={image.url} alt="myImage"></img>
            <p>{image.description}</p>
            <span>
              <i className="fas fa-heart"></i> {image.likes}
            </span>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default ImageCards;
