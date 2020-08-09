import React from "react";
import Button from "@material-ui/core/Button";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";

export default function ArrowButtons({ arrowClick }) {
  return (
    <div>
      <Button onClick={() => arrowClick("left")}>
        <KeyboardArrowLeftIcon color="primary" fontSize="large" />
      </Button>

      <Button onClick={() => arrowClick("right")}>
        <KeyboardArrowRightIcon color="primary" fontSize="large" />
      </Button>
    </div>
  );
}
