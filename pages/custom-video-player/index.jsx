import { useRef, useState, useEffect } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    video.addEventListener("timeupdate", () => {
      setProgress((video.currentTime / video.duration) * 100);
    });
  }, []);
  return (
    <div className="h-screen flex justify-center items-center p-5">
      <div className=" bg-gray-500 rounded-md">
        <video className="rounded-t-md" src="/gone.mp4" ref={videoRef} />
        <div className="p-3 flex flex-row items-center justify-between">
          <button
            onClick={() => {
              if (paused) {
                setPaused(false);
                videoRef.current.play();
              } else {
                setPaused(true);
                videoRef.current.pause();
              }
            }}
          >
            {paused && <i className="iconfont icon-play" />}
            {!paused && <i className="iconfont icon-iospause" />}
          </button>
          <button
            onClick={() => {
              videoRef.current.currentTime = 0;
              videoRef.current.pause();
            }}
          >
            <i className="iconfont icon-stop" />
          </button>
          <input
            className=""
            style={{ width: "80%" }}
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={(e) => {
              const video = videoRef.current;
              video.currentTime = (e.target.value * video.duration) / 100;
            }}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
