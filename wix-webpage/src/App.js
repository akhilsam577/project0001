import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import PageContent from "./PageContent";
import Blocks from "./Blocks";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Header />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<PageContent />} exact />
        </Routes>
        <Routes>
          <Route path="/" element={<Blocks />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
