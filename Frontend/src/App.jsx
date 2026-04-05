import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage/Home";
import DrivePreview from "./pages/Drive/drivePreview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drive_name" element={<DrivePreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;