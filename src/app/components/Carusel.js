"use client"; // this is a client component 👈🏽
import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import CocktailItem from "./CocktailItem";

const Carusel = (props) => {
  console.log("props", props);
  const cocktails = props.cocktails || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? props.cocktails.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === cocktails.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="max-w-[1400px] h-[500px] w-full m-auto px-4 relative group text-center top-[-40px] duration-500">
      <h1 className="text-4xl font-extrabold mb-4 font-mono text-white">
        {cocktails[currentIndex].name}
      </h1>
      {showInfo ? (
        <div
          className="w-full flex h-[400px] rounded-2xl bg-center bg-cover align-center transform -scale-x-100 duration-500"
          onClick={toggleInfo}
        >
          <CocktailItem cocktailItem={cocktails[currentIndex]}></CocktailItem>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${cocktails[currentIndex]?.image})` }}
          className="w-full h-[400px] rounded-2xl bg-center bg-cover duration-1000"
          onClick={toggleInfo}
        ></div>
      )}
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {cocktails.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carusel;
