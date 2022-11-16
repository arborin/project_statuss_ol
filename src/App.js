// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="groups" element={<Groups />} />
                    {/* <Route path="contact" element={<Contact />} /> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
