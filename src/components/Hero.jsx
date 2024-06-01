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
      <div className="w-2/5 bg-green-700 p-10 flex flex-col align-center">
        <h1 className="text-4xl  pt-6">Where Gardens Flourish And Dreams Blossom.</h1>
        <p className="pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in pellentesque elit, non ultrices massa.
        </p>
    <button className="pt-10 mr-auto">See More</button>
      </div>
      <div className="w-3/5 bg-cover bg-center h-[520px]"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>


    </div>
  );
};

export default Hero;
