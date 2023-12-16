
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Greeting from "./components/Greeting";
import './App.css'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App
