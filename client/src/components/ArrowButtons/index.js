import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

export default function ArrowButtons({ arrowClick, currentPage, currentCourses }) {
  return (
    <div>
      {currentPage !== 1 ? (
        <Button onClick={() => arrowClick("left")}>
          <KeyboardArrowLeftIcon color="primary" fontSize="large" />
        </Button>
      ) : ""}

      {currentCourses.length === 8 ? (
        <Button onClick={() => arrowClick("right")}>
          <KeyboardArrowRightIcon color="primary" fontSize="large" />
        </Button>
      ) : ""}
    </div>
  );
}
