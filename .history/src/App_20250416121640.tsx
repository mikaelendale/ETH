import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Auth/Login";
import Pre_register from "./Pre-register ";
import User from "./User";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre-register" element={<Pre_register />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </Router>
  );
};

export default App;
