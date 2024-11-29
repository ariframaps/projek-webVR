import React from "react";

const Box = () => {
  return (
    <a-box
      position="0 1 -2"
      rotation="10 0 0"
      color="red"
      event-set__satu="
            _event:mouseleave;
            color:#00aa00;"
      event-set__dua="
            _event:mouseenter;
            color:#ffffff;"
    />
  );
};

export default Box;
