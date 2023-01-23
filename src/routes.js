import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './containers/Home';
import Order from './containers/Order'

function Routers (){

        return(
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/orders" element={<Order/>}/>
                </Routes>
            </Router>
        )



}
export default Routers