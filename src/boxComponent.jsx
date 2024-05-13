import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";

const BoxComponent = ({
  icon,
  name,
  description,
  buttonLabel,
  paperStyle,
  iconStyle,
  buttonStyle,
  index,
}) => {
  const [rotation, setRotation] = useState(0);

  const handleButtonClick = () => {
    setRotation(rotation + 360);
  };

  // Calculate delay based on index
  const delay = index * 200; // Adjust the delay as needed

  return (
    <Slide
      direction="right"
      in={true}
      timeout={500}
      mountOnEnter
      unmountOnExit
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Paper sx={{ padding: 3, ...paperStyle }}>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          {icon}
          <Typography variant="h6" style={iconStyle}>
            {name}
          </Typography>
        </div>
        <div style={{ flex: 1, textAlign: "left" }}>
          <Typography>{description}</Typography>
          <Button
            variant="contained"
            sx={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.5s",
              ...buttonStyle,
            }}
            onClick={handleButtonClick}
          >
            {buttonLabel}
          </Button>
        </div>
      </Paper>
    </Slide>
  );
};

export default BoxComponent;
