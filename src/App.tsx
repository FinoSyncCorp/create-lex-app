import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Hero from "./components/lex/hero/HeroSection";
import Dashboard from "./pages/Dashboard";
import Layout from "./layout"; // Import the layout

function App() {
  return (
    <Router>
      <main>
        <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
