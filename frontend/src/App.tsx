import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Shirt from "./pages/Shirt";
import Hoodies from "./pages/Hoodies";
import Acc from "./pages/Acc";
import Cart from "./pages/Cart";



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/LoginPage" element={<LoginPage></LoginPage>}></Route>
        <Route path="/SignupPage" element={<SignupPage></SignupPage>}></Route>
        <Route path="/Shirt" element={<Shirt></Shirt>}></Route>
        <Route path="/Hoodies" element={<Hoodies></Hoodies>}></Route>
        <Route path="/Acc" element={<Acc></Acc>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
    </Router>
    
    </> 
  )
}

export default App
