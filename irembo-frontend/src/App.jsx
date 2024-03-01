import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import WorkPermit from "./pages/workpermit";
import WorkTest from "./pages/worktest";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkPermit />} />
        <Route path="/home" element={<WorkTest />} />
      </Routes>
    </Router>
  );
}
export default App;
