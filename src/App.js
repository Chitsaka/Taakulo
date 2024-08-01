import "./App.css";
import ResponsiveBar from "./navigationbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
