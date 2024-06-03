import image from '../images/image1.jpg'

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row mt-4">
      <div className="w-full md:w-2/5 bg-green-700 p-10 flex flex-col align-center">
        <h1 className="text-3xl md:text-4xl pt-4 md:pt-6">Where Gardens Flourish And Dreams Blossom.</h1>
        <p className="pt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in pellentesque elit, non ultrices massa.
        </p>
    <button className="pt-10 mr-auto">See More</button>
      </div>
      <div className="w-full md:w-3/5 bg-cover bg-center h-[520px]"
        style={{ backgroundImage: `url(${image})` }}
      >
      </div>
    </div>
  );
};

export default Hero;
