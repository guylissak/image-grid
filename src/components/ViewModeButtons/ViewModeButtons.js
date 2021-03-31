import React from "react";
import verticalIcon from "../../assets/verticalIcon.png";
import classes from "./ViewModeButtons.module.css";
import { HORIZONTAL, VERTICAL } from "../../common/constants";

const ViewModeButtons = React.memo(({ onViewModeChange, viewMode }) => {
  // Add active/passive style to horizontal button
  const getHorizontalButtonStyle = (viewMode) => {
    return viewMode === HORIZONTAL ? classes.activeButton : classes.passiveButton;
  };

  // Add active/passive style to vertical button
  const getVerticalButtonStyle = (viewMode) => {
    return viewMode === VERTICAL ? classes.activeButton : classes.passiveButton;
  };

  return (
    <div className={classes.buttonsContainer}>
      <button onClick={() => onViewModeChange(HORIZONTAL)} className={getHorizontalButtonStyle(viewMode)}>
        <img className={classes.horizontalImg} src={verticalIcon} alt="horizontal"></img>
        <img className={classes.horizontalImg} src={verticalIcon} alt="horizontal"></img>
      </button>
      <button onClick={() => onViewModeChange(VERTICAL)} className={getVerticalButtonStyle(viewMode)}>
        <img className={classes.verticalImg} src={verticalIcon} alt="vertical"></img>
      </button>
    </div>
  );
});

export default ViewModeButtons;
