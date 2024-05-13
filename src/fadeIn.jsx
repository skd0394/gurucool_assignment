import React, { useEffect, useState } from "react";
import "./FadeInAnimation.css"; // CSS for animation
import { Avatar, Box, Fade, Slide, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const FadeInAnimation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Start animation after a slight delay
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
      }}
    >
      <Fade in={animationStarted} timeout={1000}>
        <Typography
          variant="h1"
          style={{
            textAlign: "center",
            maxWidth: "90%",
            fontWeight: "bold",
            color: "#3f51b5",
          }}
        >
          Social Media
        </Typography>
      </Fade>

      <Slide direction="right" in={animationStarted} timeout={1000}>
        <div>
          <img
            src="https://source.unsplash.com/random/200x200"
            alt="Animation"
            style={{ width: 0, height: 0 }}
          />
        </div>
      </Slide>

    </div>
  );
};

export default FadeInAnimation;
