import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";

import Home from "./pages/Home"
import Inspect from "./pages/Inspect"
import Duel from "./pages/Duel"

function App() {
 // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser();
    duelUsers();
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/inspect" element={<Inspect />} />
        <Route path="/duel" element={<Duel />} />
      </Routes>
    </Router>
  );
}

export default App;
