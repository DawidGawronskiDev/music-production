import { useContext } from "react";
import { MainContext } from "../store";

export const Controls = () => {
  const { handleIsPlaying } = useContext(MainContext);

  return (
    <div>
      <button onClick={() => handleIsPlaying(true)}>Start</button>
      <button onClick={() => handleIsPlaying(false)}>Stop</button>
    </div>
  );
};
