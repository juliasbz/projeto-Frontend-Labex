import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from '../pages/HomePage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from "../pages/ErrorPage";
import TripDetailsPage from "../pages/TripDetailsPage";

const Router = () => {
    return (
        
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path={"/admin"} element={<AdminPage />} />
                <Route path={"*"} element={<ErrorPage />} />
                <Route path={"/admin/:tripId/details"} element={<TripDetailsPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;