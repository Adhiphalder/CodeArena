import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import DrivePreview from "./pages/Drive/DrivePreview";
import InterviewPanel from "./pages/InterView/InterviewPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drive_name" element={<DrivePreview />} />
        <Route path="/interviewPanel" element={<InterviewPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;