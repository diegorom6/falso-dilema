import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import DatesPage from "./pages/DatesPage";
import PanelPage from "./pages/PanelPage";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
                <Route path="/dates" element={<DatesPage />} />
                <Route path="/panel" element={<PanelPage />} />
            </Route>
        </Routes>
    );
}

export default App;
