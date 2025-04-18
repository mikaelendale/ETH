import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Log\in";
import Pre_register from "./Pre-register ";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pre-register" element={<Pre_register />} />
      </Routes>
    </Router>
  );
};

export default App;
