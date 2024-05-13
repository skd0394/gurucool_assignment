import React from "react";
import Stack from "@mui/material/Stack";
import BoxComponent from "./boxComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Grid, useMediaQuery } from "@mui/material";

const SocialMediaBoxWithData = () => {
  const mobileScreen = useMediaQuery("(max-width:600px) and (min-width:300px)");
  const tabletScreen = useMediaQuery(
    "(max-width: 1023px) and (min-width: 600px)"
  );

  const socialMediaData = [
    {
      icon: (
        <FacebookIcon
          sx={{
            width: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
            height: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
          }}
        />
      ),
      name: "Facebook",
      description: "Connect with friends and the world around you.",
      buttonLabel: "Connect",
    },
    {
      icon: (
        <TwitterIcon
          sx={{
            width: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
            height: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
          }}
        />
      ),
      name: "Twitter",
      description: "See what’s happening in the world right now.",
      buttonLabel: "Follow",
    },
    {
      icon: (
        <InstagramIcon
          sx={{
            width: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
            height: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
          }}
        />
      ),
      name: "Instagram",
      description: "Capture and share the world’s moments.",
      buttonLabel: "Follow",
    },
    {
      icon: (
        <LinkedInIcon
          sx={{
            width: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
            height: mobileScreen ? "30px" : tabletScreen ? "50px" : "60px",
          }}
        />
      ),
      name: "LinkedIn",
      description:
        "Connect the world's professionals to make them more productive and successful.",
      buttonLabel: "Connect",
    },
  ];
  return (
    <Stack
      gap={"20px"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
    >
      {socialMediaData.map((item, index) => (
        <BoxComponent
          key={index}
          icon={item.icon}
          name={item.name}
          description={item.description}
          buttonLabel={item.buttonLabel}
          paperStyle={{ width: "25%" }}
          index={index}
        />
      ))}
    </Stack>
  );
};

export default SocialMediaBoxWithData;
