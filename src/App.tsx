import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.tsx";
import HomePage from "./pages/HomePage.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/project" element={<ProjectPage />} />
            </Routes>
        </BrowserRouter>
    );
}