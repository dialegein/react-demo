/* eslint-disable @next/next/no-img-element */
import { useRef, useState, useMemo, useEffect } from "react";

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [play, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [index, setIndex] = useState(0);

  const song = useMemo(() => {
    const songs = ["hey", "summer", "ukulele"];
    return songs[((index % 3) + 3) % 3];
  }, [index]);

  useEffect(() => {
    audioRef.current[play ? "play" : "pause"]();
  }, [index, play]);

  useEffect(() => {
    const audio = audioRef.current;
    audio.addEventListener("timeupdate", () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center font-sans h-screen bg-gradient-to-b from-red-200 to-white">
      <h1 className="text-2xl">Music Player</h1>
      <div
        className="bg-white rounded-md shadow-md flex p-7 relative my-24 z-10"
        id="music-container"
      >
        <div
          className={` w-11/12 absolute top-0 left-5 z-0 bg-gray-50 rounded-t-2xl p-3 pl-36 transform ${
            play ? "-translate-y-full" : "opacity-0"
          }`}
          style={{
            transition: "transform 0.3s ease-in, opacity 0.3s ease-in",
          }}
        >
          <h4 id="title">{song}</h4>
          <div
            className="bg-white rounded-sm cursor-pointer my-2 h-1 min-w-full"
            id="progress-container"
            onClick={({ target, nativeEvent }) => {
              const audio = audioRef.current;
              audio.currentTime = Math.floor(
                audio.duration * (nativeEvent.offsetX / target.offsetWidth)
              );
            }}
          >
            <div
              className=" bg-red-200 rounded-sm h-full"
              id="progress"
              style={{
                width: `${progress}%`,
                transition: "width 0.1s linear",
              }}
            ></div>
          </div>
        </div>

        <audio src={`${song}.mp3`} id="audio" ref={audioRef}></audio>

        <div className="relative w-28">
          <img
            className="rounded-full object-cover h-28 absolute bottom-0 left-0 animate-spin"
            src={`${song}.jpg`}
            alt="music-cover"
            style={{
              animationPlayState: play ? "running" : "paused",
            }}
          />
        </div>
        <div
          className="flex items-center justify-center"
          style={{
            zIndex: 1,
          }}
        >
          <button
            className="bg-white border-0 cursor-pointer p-3 mx-5 text-gray-100"
            onClick={() => setIndex(index - 1)}
          >
            <i className="iconfont icon-m-pre text-gray-600 text-2xl" />
          </button>
          <button
            className="bg-white border-0  cursor-pointer mx-5 text-gray-100"
            onClick={() => setPlay(play ? false : true)}
          >
            <i
              className={`iconfont text-gray-600 text-5xl icon-m-${
                play ? "pause" : "play"
              }`}
            />
          </button>
          <button
            className="bg-white border-0  cursor-pointer p-3 mx-5 text-gray-100"
            onClick={() => setIndex(index + 1)}
          >
            <i className="iconfont icon-m-next text-gray-600 text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
