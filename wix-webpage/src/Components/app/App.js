import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Block1 from "../Block1/Block1";
import Blocks from "../Block/Blocks";
import Block2 from "../Block2/Block2";
import Block3 from "../Block3/Block3";
import Block4 from "../Block4/Block4";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Block1 />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Blocks />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Block2 />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Block3 />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Block4 />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
