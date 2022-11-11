import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InfoAndEpisodeContext } from "../../../contexts/animes/infoAndEpisodeContext";
interface PlayerInterface {
  link: string;
}

export const Player = ({ link }: PlayerInterface) => {
  const [showButton, setShowButton] = useState(false);
  const [type, setType] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [assistedTime, setAssistedTime] = useState(0);
  const [videoLength, setVideoLength] = useState(0);
  const videoId = useRef<any>(null);

  const { nextEp, animeInfo } = useContext(InfoAndEpisodeContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlay) {
      videoLength === 0 && setVideoLength(videoId.current.duration.toFixed(0));

      if (assistedTime >= 10 && assistedTime <= 90) {
        setType("skip");
        setShowButton(true);
      } else if (videoLength != 0 && assistedTime >= videoLength - 140) {
        setType("nextEpisode");
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, [assistedTime]);

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
              setAssistedTime(videoId.current.currentTime.toFixed(0));
            }}
          />
          {showButton && type === "skip" ? (
            <button
              className="ButtonSkip90Secunds"
              onClick={() => {
                videoId.current.currentTime += 90;
                setShowButton(false);
              }}
            >
              Pular 90 Segundos
            </button>
          ) : (
            showButton &&
            nextEp != null && (
              <button
                className="ButtonSkip90Secunds"
                onClick={() => {
                  toast.success("Proximo episodio", {
                    autoClose: 2500,
                    pauseOnHover: false,
                  });
                  navigate(
                    `/anime/episode/${nextEp[0].video_id}/${animeInfo[0].id}`
                  );
                  setShowButton(false);
                }}
              >
                Proximo episodio
              </button>
            )
          )}
        </div>
      </div>
    </>
  );
};
