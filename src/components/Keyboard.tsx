import { type ChangeEvent, useContext, useEffect, useState } from "react";
import { MainContext } from "../store";

const getFrequency = (noteIndex: number, octave: number) => {
  return 440 * 2 ** ((noteIndex + octave * 12 - 49) / 12);
};

export const Keyboard = () => {
  const [pressedKeys, setPressedKeys] = useState<string[]>([]);
  console.log(pressedKeys);
  const [currentOctave, setCurrentOctave] = useState(4);

  const { playOscillator, killOscillator } = useContext(MainContext);

  const handleClick = (noteIndex: number, octave: number) => {
    const oscillatorFrequency = getFrequency(noteIndex, octave);
    playOscillator(oscillatorFrequency);
  };

  const handleCurrentOctave = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setCurrentOctave(Number(value));
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      let noteIndex;
      const { key } = e;
      if (pressedKeys.find((pressedKey) => pressedKey === key)) return;
      setPressedKeys((prev) => [...prev, key]);
      switch (key) {
        case "q":
          noteIndex = 1;
          break;
        case "2":
          noteIndex = 2;
          break;
        case "w":
          noteIndex = 3;
          break;
        case "3":
          noteIndex = 4;
          break;
        case "e":
          noteIndex = 5;
          break;
        case "r":
          noteIndex = 6;
          break;
        case "5":
          noteIndex = 7;
          break;
        case "t":
          noteIndex = 8;
          break;
        case "6":
          noteIndex = 9;
          break;
        case "y":
          noteIndex = 10;
          break;
        case "7":
          noteIndex = 11;
          break;
        case "u":
          noteIndex = 12;
          break;
      }

      if (noteIndex) {
        const oscillatorFrequency = getFrequency(noteIndex, currentOctave);
        playOscillator(oscillatorFrequency);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [currentOctave, pressedKeys]);

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      let noteIndex;
      const { key } = e;
      const updatedPressedKeys = pressedKeys.filter(
        (pressedKey) => pressedKey !== key
      );
      setPressedKeys(updatedPressedKeys);
      switch (key) {
        case "q":
          noteIndex = 1;
          break;
        case "2":
          noteIndex = 2;
          break;
        case "w":
          noteIndex = 3;
          break;
        case "3":
          noteIndex = 4;
          break;
        case "e":
          noteIndex = 5;
          break;
        case "r":
          noteIndex = 6;
          break;
        case "5":
          noteIndex = 7;
          break;
        case "t":
          noteIndex = 8;
          break;
        case "6":
          noteIndex = 9;
          break;
        case "y":
          noteIndex = 10;
          break;
        case "7":
          noteIndex = 11;
          break;
        case "u":
          noteIndex = 12;
          break;
      }

      if (noteIndex) {
        const oscillatorFrequency = getFrequency(noteIndex, currentOctave);
        killOscillator(oscillatorFrequency);
      }
    };

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [currentOctave, pressedKeys]);

  return (
    <div>
      <select onChange={handleCurrentOctave} value={currentOctave}>
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
