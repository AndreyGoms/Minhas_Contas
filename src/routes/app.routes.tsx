import React from "react";
import { Routes, Route} from "react-router-dom"

import Layout from "../Components/Layout";
import Dashboard from "../pages/Dashboard";
import List from '../pages/List'

const AppRoutes: React.FC = () => (
    <Layout>
        <Routes>
            <Route path='/dashboard'  element={<Dashboard/>} />
            <Route path='/list/:movimentType'  element={<List/>} />            
        </Routes>        
    </Layout>
);

export default AppRoutes;