import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/Button/button";
import { useState } from "react";

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["../images/img1.jpg", "../images/img2.jpg"];
  console.log(currentIndex);
  

  const handleRightButtonClick = () => {
    setCurrentIndex((currentIndex) => 
      currentIndex < images.length - 1 ? currentIndex + 1 : 0);
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((currentIndex) => currentIndex <= images.length - 1 ? currentIndex - 1 : 0);
  };

  return (
    <div className="relative max-w-md h-105">
      <div className="absolute inset-y-0 left-0 right-0 flex justify-between">
        <Button>
          <ChevronLeft onClick={handleLeftButtonClick}/>
        </Button>
        <Button onClick={handleRightButtonClick}>
          <ChevronRight />
        </Button>
      </div>
      <img className="h-full w-full" src={images[currentIndex]} />
    </div>
  );
}
