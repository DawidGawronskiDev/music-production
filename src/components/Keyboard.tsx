import { type ChangeEvent, useContext, useState } from "react";
import { MainContext } from "../store";

const getFrequency = (noteIndex: number, octave: number) => {
  return 440 * 2 ** ((noteIndex + octave * 12 - 49) / 12);
};

export const Keyboard = () => {
  const [currentOctave, setCurrentOctave] = useState(4);

  const { handleOscillatorFrequency } = useContext(MainContext);

  const handleClick = (noteIndex: number, octave: number) => {
    const oscillatorFrequency = getFrequency(noteIndex, octave);
    handleOscillatorFrequency(oscillatorFrequency);
  };

  const handleCurrentOctave = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCurrentOctave(Number(value));
  };

  return (
    <div>
      <select onChange={handleCurrentOctave}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="relative">
        <button
          onClick={() => handleClick(1, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(2, currentOctave)}
          className="w-12 h-16 border rounded bg-black absolute -translate-x-1/2"
        />
        <button
          onClick={() => handleClick(3, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(4, currentOctave)}
          className="w-12 h-16 border rounded bg-black absolute -translate-x-1/2"
        />
        <button
          onClick={() => handleClick(5, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(6, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(7, currentOctave)}
          className="w-12 h-16 border rounded bg-black absolute -translate-x-1/2"
        />
        <button
          onClick={() => handleClick(8, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(9, currentOctave)}
          className="w-12 h-16 border rounded bg-black absolute -translate-x-1/2"
        />
        <button
          onClick={() => handleClick(10, currentOctave)}
          className="w-12 h-32 border rounded"
        />
        <button
          onClick={() => handleClick(11, currentOctave)}
          className="w-12 h-16 border rounded bg-black absolute -translate-x-1/2"
        />
        <button
          onClick={() => handleClick(12, currentOctave)}
          className="w-12 h-32 border rounded"
        />
      </div>
    </div>
  );
};
