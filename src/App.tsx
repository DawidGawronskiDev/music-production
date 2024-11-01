import { Oscillator } from "./components/Oscillator";
import { Filter } from "./components/Filter";
import { MainContextProvider } from "./store";
import { Controls } from "./components/Controls";
import { Keyboard } from "./components/Keyboard";

const App = () => {
  return (
    <MainContextProvider>
      <div>
        <Controls />
        <Oscillator />
        <Filter />
        <Keyboard />
      </div>
    </MainContextProvider>
  );
};

export default App;
