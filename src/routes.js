import {BrowserRouter, Route, Routes as RT} from "react-router-dom"
import Home from "./Pages/Home/Home"
import Research from "./Pages/Research/Research"

const Routes = () => {
    return(
        <BrowserRouter>
            <RT>
                <Route element={<Home/>} path="/" exact />
                <Route element={<Research/>} path="/Research"  />
            </RT>
        </BrowserRouter>
    )
}

export default Routes