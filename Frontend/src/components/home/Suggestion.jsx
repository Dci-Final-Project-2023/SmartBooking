import React from "react";
import Grid from "@mui/material/Grid";
import { NavLink } from "react-router-dom";
import images from "../../../store/suggestionImages";

const Suggestion = () => {
  
  return (
    <div className="text-center border bg-slate-300 shadow-xl">
      <h1 className="lg:text-4xl mt-10 ">Empfehlung zur Entdeckung</h1>
      <p className="lg:text-xl my-3  text-gray-500">
        Beliebte Übernachtungsmöglichkeiten für Sie!
      </p>

      <Grid container spacing={2} className="m-12 px-2 lg:px-24 py-4">
        {images.map((image, i) => {
          return (
            <Grid
              key={i}
              item
              className="shadow-lg p-4 hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105"
              xs={6}
              sm={6}
              md={4}
              lg={2}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                gap: "1rem",
              }}
            >
              <NavLink to={`/hotels/suggestion/${image.title}`}>
                <img
                  className="rounded-md md:h-64 md:w-64 text-center m-auto object-cover"
                  src={image.url}
                  alt={image.title}
                />
                <h2 className="text-gray-600 text-lg mt-2">{image.title}</h2>
                <div className="text-sm text-myPink">{image.desc}</div>
              </NavLink>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Suggestion;
