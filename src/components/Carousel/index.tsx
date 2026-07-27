import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button/button";
import { useState } from "react";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "../images/img1.jpg",
    "../images/img2.jpg",
    "../images/img3.jpg",
  ];
  console.log(currentIndex);
  const imagesLength = images.length - 1;

  const handleRightButtonClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex < imagesLength ? currentIndex + 1 : 0,
    );
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex == 0 ? imagesLength : currentIndex - 1,
    );
  };

  return (
    <div className="relative max-w-md h-105 box-shadow-hard-accent">
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between">
        <Button onClick={handleLeftButtonClick}>
          <ChevronLeft />
        </Button>
        <Button onClick={handleRightButtonClick}>
          <ChevronRight />
        </Button>
      </div>
      <span className="absolute z-10 top-8 left-2 text-primary border font-black px-2">
        REC ●
      </span>
      <img 
        className="h-full w-full"
        src={images[currentIndex]}
        alt=""
      />
    </div>
  );
}
