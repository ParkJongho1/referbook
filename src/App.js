import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../src/component/Header";
import CreatWord from "./component/CreatWord";
import Day from "./component/Day";
import DayList from "./component/DayList";
import EmptyRage from "./component/EmptyRage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreatWord />} />
          <Route path="*" element={<EmptyRage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
