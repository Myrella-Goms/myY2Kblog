import { Button } from "../ui/Button/button";
import ReactPlayer from "react-player";
import { useState } from "react";
import { Select } from "../ui/Select/select";
interface Songs {
  label: string;
  value: string;
}
export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const songs: Songs[] = [
    {
      label: "fell in love with a girl - the stripes",
      value: "https://www.youtube.com/embed/fTH71AAxXmM?si=QRDK5LjepWEKBN50",
    },
    {
      label: "nobody´s home - avirl lavigne",
      value: "https://www.youtube.com/embed/NGFSNE18Ywc?si=_WlDHzwhDPbYUywa",
    },
    {
      label: "decode - paramore",
      value: "https://www.youtube.com/embed/RvnkAtWcKYg?si=geEZhVdNwIVj9_AE",
    },
  ];

  const songsLength = songs.length - 1;

  const handleRightButtonClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex < songsLength ? currentIndex + 1 : 0,
    );
  };

  const handleLeftButtonClick = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex == 0 ? songsLength : currentIndex - 1,
    );
  };

  const handleSelectChange = (newValue : string) => {
    console.log(`valor inicial ${newValue}`);
    const index = songs.findIndex((song) => song.value === newValue);
    console.log(newValue);
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex flex-col gap-5 border h-105 box-shadow-hard-accent">
      <div className="flex justify-around border-b py-4">
        <span className="text-mobile-body text-primary"> ♫now_playing </span>
        <span className="blink text-primary text-glitch border font-black px-2 self-center">
          REC ●
        </span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <span className="text-glitch">↓↓ pick your fave song ↓↓</span>
        <Select
          value={songs[currentIndex].value}
          options={songs}
          onChange={handleSelectChange}
        />
        <ReactPlayer
          className="h-60"
          src={songs[currentIndex].value}
          controls
        />
      </div>
      <div className="flex justify-around">
        <Button
          className="flex justify-center items-center bg-primary w-25 h-12 hover:bg-destructive hover:zoom-115 text-lg"
          onClick={handleLeftButtonClick}
        >
          {`<< `}back
        </Button>
        <Button
          className="flex justify-center items-center border w-25 h-12 hover:bg-accent hover:text-background hover:zoom-115 text-lg"
          onClick={handleRightButtonClick}
        >
          next {` >>`}
        </Button>
      </div>
    </div>
  );
}
