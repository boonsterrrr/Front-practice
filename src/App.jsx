import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Login from "./pages/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/game" element={<Game></Game>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
    </Routes>
  );
};

export default App;
