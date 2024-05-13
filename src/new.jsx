import React from "react";
import Stack from "@mui/material/Stack";
import BoxComponent from "./boxComponent";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const socialMediaData = [
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    description: "Connect with friends and the world around you.",
    buttonLabel: "Connect",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    description: "See what’s happening in the world right now.",
    buttonLabel: "Follow",
  },
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    description: "Capture and share the world’s moments.",
    buttonLabel: "Follow",
  },
  {
    icon: <LinkedInIcon />,
    name: "LinkedIn",
    description:
      "Connect the world's professionals to make them more productive and successful.",
    buttonLabel: "Connect",
  },
];

const SocialMediaBoxWithData = () => {
  return (
    <Stack spacing={3} alignItems={"center"}>
      {socialMediaData.map((item, index) => (
        <BoxComponent
          key={index}
          icon={item.icon}
          name={item.name}
          description={item.description}
          buttonLabel={item.buttonLabel}
          paperStyle={{ width: "25%" }}
          iconStyle={{ fontSize: 50 }}
          index={index}
        />
      ))}
    </Stack>
  );
};

export default SocialMediaBoxWithData;
