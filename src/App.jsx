import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import "./App.css";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<IndexPage />} />
            </Route>
        </Routes>
    );
}

export default App;
