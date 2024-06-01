import Section from "./Section";
import Button from "./Button";
import { curve, heroBackground, robot } from "../assets";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import image from '../images/image1.jpg'

const Hero = () => {
  // const parallaxRef = useRef(null);
  return (
    <div className="max-w-screen-xl mx-auto flex mt-4">
      <div className="w-2/5  bg-purple-950">
        <h1>Where Gardens Flourish And Dreams Blossom.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in pellentesque elit, non ultrices massa.
        </p>
      </div>
      <div className="w-3/5 bg-blue-950 bg-cover bg-center h-[520px]"
        style={{backgroundImage: `url(${image})`}}
      >
        
      </div>
    </div>
  );
};

export default Hero;
