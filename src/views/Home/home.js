import { useEffect, useReducer, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dashboard from "../../layout/dashboard";
import './css/home.css';
import * as Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import TituloPage from "../../components/titulo_page";

export default function Home() {

    const locale = useSelector(store => store.user.lang);
    const selector = useSelector(store => store);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {

    }, [])

    return (
        <Dashboard>
            <Grid item xs={12} sm={12} md={12}>
                <TituloPage titulo="Inicio" />
            </Grid>
        </Dashboard>
    );
}