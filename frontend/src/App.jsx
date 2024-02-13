import { Login, Register, Home, Feed , NewAcessToken} from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newAccessToken" element={<NewAcessToken />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
