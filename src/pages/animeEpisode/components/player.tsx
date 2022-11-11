import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useRef, useState } from "react";
interface PlayerInterface {
  link: string;
}

export const Player = ({ link }: PlayerInterface) => {
  const [showButton, setShowButton] = useState(false);
  const [type, setType] = useState("skip");
  const [isPlay, setIsPlay] = useState(false);
  const [test, setTest] = useState(0);

  const videoId = useRef<any>(null);

  useEffect(() => {
    isPlay && test >= 10 && test <= 90
      ? setShowButton(true)
      : setShowButton(false);
  }, [test]);

  return (
    <>
      <div style={{ contain: "content" }}>
        <div className="player-wrapper">
          <video
            src={`${link}`}
            className="react-player"
            width="100%"
            height="100%"
            controls
            ref={videoId}
            onPlaying={() => {
              setIsPlay(true);
            }}
            onPause={() => setIsPlay(false)}
            onTimeUpdate={() => {
              setTest(videoId.current.currentTime.toFixed(0));
            }}
          />
          {showButton && (
            <button
              className="ButtonSkip90Secunds"
              onClick={() => {
                videoId.current.currentTime += 90;
                setShowButton(false);
              }}
            >
              Pular 90 Segundos
            </button>
          )}
        </div>
      </div>
    </>
  );
};
