import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DispatchAppPage from "./pages/DispatchAppPage";
import Test from "./pages/Test";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/test" element={<Test />} />
          <Route path="/" element={<DispatchAppPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
