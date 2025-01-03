import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./authentication/Login/Login";
import SignUp from "./authentication/Signup/Signup";
import Service from "./pages/Service/Service";
import Guide from "./pages/Guide/Guide";
import Home from "./pages/Home/Home";
import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer/Footer";
import Schemes from "./pages/Schemes/Schemes";

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <section style={{ minHeight: "90vh" , display: "flex", flexDirection: "column", justifyContent: "center"}}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/schemes" element={<Schemes />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/guide" element={<Guide />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<SignUp/>} />
                </Routes>
                </section>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
