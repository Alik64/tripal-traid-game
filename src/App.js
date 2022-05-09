import { Route, Routes, useLocation } from "react-router-dom";

import Main from "./pages/Main";
import Biography from "./pages/Biography";
import Layout from "./components/Layout";
import About from "./pages/About/";
import Contacts from "./pages/Contacts";
import Characters from "./pages/Characters/Characters";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";

function App() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="characters" element={<Characters />} />
        <Route path="characters/:id" element={<Biography />} />
        <Route path="about" element={<About />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
