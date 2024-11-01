import { useContext } from "react";
import { MainContext } from "../store";

export const Oscillator = () => {
  const { oscillatorSettings, handleOscillatorSettings, handleOscillatorType } =
    useContext(MainContext);

  const { frequency, detune, type } = oscillatorSettings;
  return (
    <div>
      <span>Oscillator</span>
      <div>
        <span>Frequency</span>
        <input
          type="range"
          id="frequency"
          max="5000"
          value={frequency}
          onChange={handleOscillatorSettings}
        />
      </div>
      <div>
        <span>Detune</span>
        <input
          type="range"
          id="detune"
          value={detune}
          onChange={handleOscillatorSettings}
        />
      </div>

      <div>
        <span>Type</span>
        <select id="type" onChange={handleOscillatorType} value={type}>
          <option value="custom" disabled>
            Custom
          </option>
          <option value="sawtooth">Sawtooth</option>
          <option value="sine">Sine</option>
          <option value="square">Square</option>
          <option value="triangle">Triangle</option>
        </select>
      </div>
    </div>
  );
};
