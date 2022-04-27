import { Route, Routes } from "react-router-dom";

import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="bio/:id" element={<Biography />} />
      </Route>
    </Routes>
  );
}

export default App;
