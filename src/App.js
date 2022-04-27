import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Biography from "./pages/Biography";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/bio" element={<Biography id={1011334} />} />
    </Routes>
  );
}

export default App;
