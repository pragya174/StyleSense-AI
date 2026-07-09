import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import UploadPage from "./pages/UploadPage";
import LoadingPage from "./pages/LoadingPage";
import ResultPage from "./pages/ResultPage";
import TryStylePage from "./pages/TryStylePage";
import ReferencePage from "./pages/ReferencePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/result" element={<ResultPage />} />

        {/* NEW */}
        <Route path="/try-style" element={<TryStylePage />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/reference" element={<ReferencePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;