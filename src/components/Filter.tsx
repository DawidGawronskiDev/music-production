import { useContext } from "react";
import { MainContext } from "../store";

export const Filter = () => {
  const { filterSettings, handleFilterSettings, handleFilterType } =
    useContext(MainContext);

  const { frequency, detune, Q, gain, type } = filterSettings;

  return (
    <div className="border p-4 rounded-2xl">
      <h2>Filter</h2>
      <div className="flex">
        <div>
          <span>Frequency</span>
          <input
            type="range"
            id="frequency"
            max="10000"
            onChange={handleFilterSettings}
            value={frequency}
          />
        </div>
        <div>
          <span>Detune</span>
          <input
            type="range"
            id="detune"
            onChange={handleFilterSettings}
            value={detune}
          />
        </div>
        <div>
          <span>Q</span>
          <input
            type="range"
            id="Q"
            max="10"
            onChange={handleFilterSettings}
            value={Q}
          />
        </div>
        <div>
          <span>Gain</span>
          <input
            type="range"
            id="gain"
            max="10"
            onChange={handleFilterSettings}
            value={gain}
          />
        </div>
        <div>
          <span>Type</span>
          <select id="type" onChange={handleFilterType} value={type}>
            <option value="allpass">allpass</option>
            <option value="bandpass">bandpass</option>
            <option value="highpass">highpass</option>
            <option value="highshelf">highshelf</option>
            <option value="lowpass">lowpass</option>
            <option value="lowshelf">lowshelf</option>
            <option value="notch">notch</option>
            <option value="peaking">peaking</option>
          </select>
        </div>
      </div>
    </div>
  );
};
