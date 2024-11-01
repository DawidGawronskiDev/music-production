import { forwardRef, MutableRefObject, useEffect, useState } from "react";

export const PanController = forwardRef<Howl, any>((props, ref) => {
  const sound = ref as MutableRefObject<Howl>;

  const [isOn, setIsOn] = useState(true);
  const [panDegree, setPanDegree] = useState(1);
  const [panSpeed, setPanSpeed] = useState(50);

  const handleisOn = () => {
    if (isOn) {
      sound.current.stereo(0);
    }
    setIsOn((prev) => !prev);
  };

  const handlePanDegree = (n: number) => {
    setPanDegree(n);
  };

  const handlePanSpped = (n: number) => {
    setPanSpeed(n);
  };

  useEffect(() => {
    if (!isOn) {
      return;
    }

    let i = 0;
    const panInterval = setInterval(() => {
      const degree = Math.sin(i) / panDegree;
      sound.current.stereo(degree);
      i += 0.1;
    }, panSpeed);

    return () => {
      clearInterval(panInterval);
    };
  }, [isOn, panDegree, panSpeed]);

  return (
    <div>
      <span>Pan Controller: </span>
      <div>
        <span>Auto Pan:</span>
        <button onClick={handleisOn}>{isOn ? "On" : "Off"}</button>
        <button onClick={() => handlePanDegree(1)}>90deg</button>
        <button onClick={() => handlePanDegree(2)}>45deg</button>
        <button onClick={() => handlePanDegree(3)}>30deg</button>
      </div>
      <div>
        <span>Pan Speed</span>
        <div>
          <button onClick={() => handlePanSpped(10)}>Fast</button>
          <button onClick={() => handlePanSpped(50)}>Medium</button>
          <button onClick={() => handlePanSpped(100)}>Slow</button>
        </div>
      </div>
    </div>
  );
});
