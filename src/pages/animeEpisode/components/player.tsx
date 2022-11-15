import "bootstrap/dist/css/bootstrap.min.css";
import {
  ChangeEvent,
  MutableRefObject,
  RefObject,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { InfoAndEpisodeContext } from "../../../contexts/animes/infoAndEpisodeContext";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Controllers } from "./styled";
import { BiPause, BiPlay } from "react-icons/bi";

interface PlayerInterface {
  link: string;
}

/* export const Player = ({ link }: PlayerInterface) => {
  const [showButton, setShowButton] = useState(false);
  const [type, setType] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [videoWatched, setvideoWatched] = useState(0);
  const [videoLength, setVideoLength] = useState(0);
  const playerRef = useRef<any>(null);
  const divPlayerRef = useRef<any>(null);
  const { nextEp, animeInfo } = useContext(InfoAndEpisodeContext);
  const [cont, setCont] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPlay) {
      videoLength === 0 &&
        setVideoLength(playerRef.current.duration.toFixed(0));
      console.log(playerRef.current.topLayer);
      if (videoWatched >= 10 && videoWatched <= 90) {
        setType("skip");
        setShowButton(true);
      } else if (videoLength != 0 && videoWatched >= videoLength - 140) {
        setType("nextEpisode");
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }
  }, [videoWatched]);

  function toggleFullScreen(cont: number) {
    if (document.fullscreenElement !== null) {
    
      console.log("restrasd");
      FullScreen.style.display = 'none';
    } else {
      setCont(1);
      console.log("sda");
    }
  }

  useEffect(() => {
    toggleFullScreen(cont);
    setCont(2);
  }, [document.fullscreenElement]);

  const handle = useFullScreenHandle();
  return (
    <div className="test" ref={divPlayerRef} id="dsada" style={{
      zIndex: 2147483647,
    }}>
      <div className="player-wrapper">
        <video
          id="fullsreacn"
          src={`${link}`}
          className="react-player"
          width="100%"
          height="100%"
          controls
          ref={playerRef}
          onPlaying={() => {
            setIsPlay(true);
          }}
          onPause={() => setIsPlay(false)}
          onTimeUpdate={() => {
            setvideoWatched(playerRef.current.currentTime.toFixed(0));
          }}
        />
        <div
          style={{
            zIndex: 2147483647,
          }}
        >
          {showButton && type === "skip" ? (
            <button
              className="ButtonSkip90Secunds"
              onClick={() => {
                playerRef.current.currentTime += 90;
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
    </div>
  );
}; */

const usePlayerState = (playerRef: RefObject<HTMLVideoElement>) => {
  const [playerState, setPlayerState] = useState({
    playing: false,
    duration: 0,
    percentage: 0,
    currentTime: 0,
  });

  const currentDuration = () => {
    const currentDuration = playerRef.current!.duration / 60;
    return setPlayerState({
      ...playerState,
      duration: +currentDuration.toFixed(2),
    });
  };

  useEffect(() => {
    playerState.playing
      ? playerRef.current!.play()
      : playerRef.current!.pause();
  }, [playerState.playing]);

  useEffect(() => {
    playerRef != null && currentDuration();
  }, [playerRef.current]);

  const toggleVideoPlay = () => {
    return setPlayerState({
      ...playerState,
      playing: !playerState.playing,
    });
  };

  const handleVideoCurrentTime = () => {
    const currentTime = playerRef.current!.currentTime / 60;
    return currentTime;
  };

  const handleTimeUpdate = () => {
    const currentPercentage =
      (playerRef.current!.currentTime / playerRef.current!.duration) * 100;
    const currentTimeSeconds = handleVideoCurrentTime();
    return setPlayerState({
      ...playerState,
      percentage: currentPercentage,
      currentTime: +currentTimeSeconds.toFixed(2),
    });
  };

  const handleVideoPorcentage = (env: ChangeEvent<HTMLInputElement>) => {
    const currentPercentage = +env.target.value;

    playerRef.current!.currentTime =
      (playerRef.current!.duration / 100) * currentPercentage;

    return setPlayerState({
      ...playerState,
      percentage: currentPercentage,
    });
  };

  return {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleVideoPorcentage,
  };
};

export const PlayerTest = ({ link }: PlayerInterface) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const {
    playerState,
    toggleVideoPlay,
    handleTimeUpdate,
    handleVideoPorcentage,
  } = usePlayerState(playerRef);

  return (
    <div className="player-wrapper">
      <video
        width="100%"
        height="100%"
        className="react-player"
        src={link}
        ref={playerRef}
        onClick={toggleVideoPlay}
        onTimeUpdate={() => {
          handleTimeUpdate();
        }}
      />
      <Controllers>
        <button onClick={toggleVideoPlay}>
          {playerState.playing ? <BiPlay size={18} /> : <BiPause size={18} />}
        </button>
        <div className="InputRange">
          <span>
            {`${playerState.currentTime}/${playerState.duration}`.replaceAll(
              ".",
              ":"
            )}
          </span>
          <input
            type="range"
            min={0}
            max={100}
            value={playerState.percentage}
            onChange={(e) => handleVideoPorcentage(e)}
          />
        </div>
      </Controllers>
    </div>
  );
};
