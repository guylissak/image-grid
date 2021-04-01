import React, { useState, useEffect, useCallback } from "react";
import ImageCards from "../../components/ImageCards/ImageCards";
import classes from "./Layout.module.css";
import ViewModeButtons from "../../components/ViewModeButtons/ViewModeButtons";
import * as utils from "../../common/utils";
import { HORIZONTAL } from "../../common/constants";

const Layout = () => {
  // States
  const [images, setImages] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [viewMode, setViewMode] = useState(HORIZONTAL);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    // fetch new images on each refresh
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  // fetchImages - fetch random images from an endpoint
  const fetchImages = async () => {
    try {
      const randomImages = await utils.getFiveRandomImages([...images]);
      // Update state
      setImages(randomImages);
    } catch (err) {
      setError(true);
    }
  };

  // onRefresh - toggle state to cause render
  const onRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  // viewModeHandler - change the viewMode state, wrapped in useCallback to prevent render of ViewModeButtons component when not needed
  const viewModeHandler = useCallback((viewMode) => {
    setViewMode(viewMode);
  }, []);

  const getViewModeStyle = () => {
    if (viewMode === HORIZONTAL) {
      return classes.imagesContainer;
    }

    return "";
  };

  return (
    <React.Fragment>
      {hasError ? (
        <h1>Something went wrong, please try again later</h1>
      ) : (
        <div className={classes.layoutContainer}>
          <div className={classes.viewButtons}>
            <ViewModeButtons onViewModeChange={viewModeHandler} viewMode={viewMode} />
          </div>
          <div className={getViewModeStyle()}>
            <ImageCards images={images} viewMode={viewMode} />
          </div>
          <div className={classes.refreshButton}>
            <button onClick={onRefresh} className={classes.styledButton}>
              refresh
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Layout;
