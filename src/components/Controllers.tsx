import {
  type ChangeEvent,
  forwardRef,
  type MutableRefObject,
  useState,
} from "react";

export const Controllers = forwardRef<Howl, any>((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const sound = ref as MutableRefObject<Howl>;

  const handlePlay = () => {
    if (sound && sound.current) {
      sound.current.play();
      setIsPlaying(true);
    }
  };

  const handleStop = () => {
    if (sound && sound.current) {
      sound.current.stop();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (sound && sound.current) {
      sound.current.volume(Number(e.target.value));
    }
  };

  const handleSpeedChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (sound && sound.current) {
      sound.current.rate(Number(e.target.value));
    }
  };

  const handlePanChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (sound && sound.current) {
      sound.current.stereo(Number(e.target.value));
    }
  };

  return (
    <div>
      <button onClick={handlePlay} disabled={isPlaying}>
        Play
      </button>

      <button onClick={handleStop} disabled={!isPlaying}>
        Stop
      </button>

      <div>
        <span>Volume: </span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          onChange={handleVolumeChange}
        />
      </div>

      <div>
        <span>Speed: </span>

        <input
          type="range"
          min="0"
          max="2"
          step="0.1"
          defaultValue="1"
          onChange={handleSpeedChange}
        />
      </div>

      <div>
        <span>Pan: </span>

        <input
          type="range"
          min="-1"
          max="1"
          step="0.1"
          defaultValue="0"
          onChange={handlePanChange}
        />
      </div>
    </div>
  );
});
