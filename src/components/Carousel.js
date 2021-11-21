import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Button } from "@mui/material";

function Carousel({ images }) {
  const [present, setPresent] = useState({
    image: images[0],
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    setPresent({ image: images[count % images.length] });
  }, [count]);

  return (
    <div className="Carousel">
      <Button
        className="LeftArrowButton"
        onClick={() => {
          count === 0 ? setCount(images.length - 1) : setCount(count + -1);
        }}
      >
        <ArrowBackIosNewIcon />
      </Button>
      <img src={present.image} alt="img" className="Img" />
      <Button className="RightArrowButton" onClick={() => setCount(count + 1)}>
        <ArrowForwardIosIcon />
      </Button>
    </div>
  );
}

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
};
export default Carousel;
