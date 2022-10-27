import ReactPlayer from "react-player";
import "bootstrap/dist/css/bootstrap.min.css";
interface PlayerInterface {
  link: string;
}

export const Player = ({ link }: PlayerInterface) => {
  return (
    <div className="player-wrapper">
      <video
        src={`${link}`}
        className="react-player"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};
