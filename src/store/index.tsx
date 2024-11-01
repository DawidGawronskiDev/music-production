import {
  type ChangeEvent,
  type ReactNode,
  createContext,
  useState,
} from "react";
import {
  type MainContextProps,
  type FilterSettings,
  type OscillatorId,
  type OscillatorSettings,
} from "../types";

const audioContext = new AudioContext();
const output = audioContext.destination;
const oscillator = audioContext.createOscillator();
const filter = audioContext.createBiquadFilter();
const gain = audioContext.createGain();

oscillator.connect(gain);
gain.connect(filter);
filter.connect(output);

const defaultOscillatorSettings: OscillatorSettings = {
  frequency: oscillator.frequency.value,
  detune: oscillator.detune.value,
  type: oscillator.type,
};

const defaultFilterSettings: FilterSettings = {
  frequency: filter.frequency.value,
  detune: filter.detune.value,
  type: filter.type,
  Q: filter.Q.value,
  gain: filter.gain.value,
};

export const MainContext = createContext<MainContextProps>({
  isPlaying: false,
  oscillatorSettings: defaultOscillatorSettings,
  filterSettings: defaultFilterSettings,
  handleIsPlaying: () => {},
  handleOscillatorFrequency: () => {},
  handleOscillatorSettings: () => {},
  handleOscillatorType: () => {},
  handleFilterSettings: () => {},
  handleFilterType: () => {},
});

export const MainContextProvider = ({ children }: { children: ReactNode }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [oscillatorSettings, setOscillatorSettings] =
    useState<OscillatorSettings>(defaultOscillatorSettings);

  const [filterSettings, setFilterSettings] = useState<FilterSettings>(
    defaultFilterSettings
  );

  const handleIsPlaying = (val: boolean) => {
    if (val) {
      oscillator.start();
      setIsPlaying(true);
    } else {
      oscillator.stop();
      setIsPlaying(false);
    }
  };

  const handleOscillatorFrequency = (frequency: number) => {
    const updatedOscillatorSettings = oscillatorSettings;
    updatedOscillatorSettings["frequency"] = frequency;

    oscillator.frequency.value = frequency;
    setOscillatorSettings(updatedOscillatorSettings);
  };

  const handleOscillatorSettings = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target as HTMLInputElement & OscillatorId;
    oscillator[id].value = +value;

    const updatedOscillatorSettings = { ...oscillatorSettings, [id]: +value };
    setOscillatorSettings(updatedOscillatorSettings);
  };

  const handleOscillatorType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLSelectElement & { value: OscillatorType };
    oscillator.type = value;
    setOscillatorSettings({ ...oscillatorSettings, type: value });
  };

  const handleFilterSettings = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target as HTMLInputElement & OscillatorId;
    filter[id].value = +value;

    const updatedFilterSettings = { ...filterSettings, [id]: +value };
    setFilterSettings(updatedFilterSettings);
  };

  const handleFilterType = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target as HTMLSelectElement & {
      value: BiquadFilterType;
    };
    filter.type = value;
    setFilterSettings({ ...filterSettings, type: value });
  };

  return (
    <MainContext.Provider
      value={{
        isPlaying,
        oscillatorSettings,
        filterSettings,
        handleIsPlaying,
        handleOscillatorFrequency,
        handleOscillatorSettings,
        handleOscillatorType,
        handleFilterSettings,
        handleFilterType,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};
