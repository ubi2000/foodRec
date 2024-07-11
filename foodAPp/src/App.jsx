import "./App.css";
import FullRecipe from "./components/FullRecipe";
import Main from "./components/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:mealId" element={<FullRecipe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
