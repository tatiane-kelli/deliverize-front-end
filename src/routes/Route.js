import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Product from "../pages/index";

const AppRoutes = () => {
   return(
    <Router>
        <Routes>
            <Route path="/" element={<Product/>}>           
            </Route>       
        </Routes>
    </Router>
   )
}

export default AppRoutes;