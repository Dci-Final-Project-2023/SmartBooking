import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import React from "react";

function Scroll() {
  const scrollUp = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  };

  return (
    <React.Fragment>
      <button
        onClick={scrollUp}
        className="rounded-full bg-red-400 fixed right-16 bottom-10 opacity-70 px-1 py-1"
      >
        <ExpandLessIcon sx={{ fontSize: "48px" }} />
      </button>
    </React.Fragment>
  );
}

export default Scroll;
