// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Groups from "./pages/Groups";
import Home from "./pages/Home";
import Nav from "./pages/Nav";
import GroupView from "./pages/GroupView";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/groups" element={<Groups />} />
                    <Route path="/group/:id" element={<GroupView />} />
                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
