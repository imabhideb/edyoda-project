import Home from "./Components/Home";
import Main from "./Pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home/>} />
          {/* <Route path="/modules" element={<Main />} />
          <Route path="/instructor" element={<Main />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
