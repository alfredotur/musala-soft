import { Route, Routes } from "react-router-dom";
import Home from "../views/Home/home";
import Gateway from "../views/Gateway/gateway";
import AddGateway from "../views/Gateway/add_gateway";
import Peripheral from "../views/Peripheral/peripheral";
import AddPeripheral from "../views/Peripheral/add_peripheral";
import { Suspense } from "react";
import Loader from "../components/loader";

export default function Musala() {

    return (
        <Suspense fallback={<Loader />}>
            <div className="APP">
                <Routes>
                    
                    <Route path="/" element={<Home />} />
                    <Route path="/gateway" element={<Gateway />} />
                    <Route path="/addgateway" element={<AddGateway />} />
                    <Route path="/peripheral" element={<Peripheral />} />
                    <Route path="/addperipheral" element={<AddPeripheral />} />
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </Suspense>
    )
}