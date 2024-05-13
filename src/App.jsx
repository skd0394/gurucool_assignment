import FadeInAnimation from "./fadeIn";
import img1 from "./assets/pexels-chevanon-1108099.jpg";
import "./app.css";
import { Stack } from "@mui/material";
import SocialMediaBox from "./new";
const images = [
  "https://images.pexels.com/photos/1643457/pexels-photo-1643457.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/64219/dolphin-marine-mammals-water-sea-64219.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/735423/pexels-photo-735423.jpeg?auto=compress&cs=tinysrgb&w=600",
];

function App() {
  return (
    <>
      <Stack width={"100vw"} bgcolor={"#acd5ea"}>
        <FadeInAnimation />
      </Stack>
      <SocialMediaBox />
    </>
  );
}

export default App;
