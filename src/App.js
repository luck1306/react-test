import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootPage from "./components/page/RootPage";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RootPage></RootPage>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
