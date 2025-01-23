import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFoud"
import Home from "./Pages/Home";

import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
