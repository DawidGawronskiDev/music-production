import { type ChangeEvent } from "react";

export interface OscillatorId {
  id: "frequency" | "detune";
}

export interface OscillatorSettings {
  frequency: number;
  detune: number;
  type: OscillatorType;
}

export interface FilterSettings {
  frequency: number;
  detune: number;
  type: BiquadFilterType;
  Q: number;
  gain: number;
}

export interface MainContextProps {
  isPlaying: boolean;
  oscillatorSettings: OscillatorSettings;
  filterSettings: FilterSettings;
  handleIsPlaying: (val: boolean) => void;
  playOscillator: (frequency: number) => void;
  killOscillator: (frequenct: number) => void;
  handleOscillatorFrequency: (frequency: number) => void;
  handleOscillatorSettings: (e: ChangeEvent<HTMLInputElement>) => void;
  handleOscillatorType: (e: ChangeEvent<HTMLSelectElement>) => void;
  handleFilterSettings: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFilterType: (e: ChangeEvent<HTMLSelectElement>) => void;
}
