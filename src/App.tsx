import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
