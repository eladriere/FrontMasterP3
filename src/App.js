import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageDeConnexion from "./Pages/PageDeConnexion";
import PagePrincipale from "./Pages/PagePrincipale";
import PagePiece from "./Pages/PagePiece";

function App() {
    return (
        <main>
            <Router>
                <Routes>
                    <Route path='/' element={<PageDeConnexion />} />
                    <Route path='/menu' element={<PagePrincipale />} />
                    <Route path='/piece' element={<PagePiece />} />
                </Routes>
            </Router>
        </main>
    );
}

export default App;
