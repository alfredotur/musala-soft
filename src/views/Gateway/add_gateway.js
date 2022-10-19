import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, Grid, TextField } from "@mui/material";
import Dashboard from "../../layout/dashboard";
import TituloPage from "../../components/titulo_page";
import * as Swal from 'sweetalert2';
import './css/usuarios.css';

export default function AddUsuario() {

    const navigate = useNavigate();
    const [nombre, setNombre] = useState('');
    const [ipv4, setIpv4] = useState('');
    const [peripheral, setPeripheral] = useState('');
    const [grupos, setGrupos] = useState([]);


    useEffect(() => {

    }, [])

    const onClickCancelarDatos = () => {
        setNombre('');
        setIpv4('');
        setPeripheral('');
        navigate("/gateway", { replace: true });
    }

    const onClickGuardarDatos = () => {
        if (nombre === '') {
            Swal.fire({
                icon: 'error',
                text: 'El campo Nombre es obligatorio.'
            });
            return;
        }

        if (ipv4 === '') {
            Swal.fire({
                icon: 'error',
                text: 'El campo Ipv4 es obligatorio.'
            });
            return;
        }

        if (peripheral === '') {
            Swal.fire({
                icon: 'error',
                text: 'El campo Peripheral es obligatorio.'
            });
            return;
        }

        

       
        alert('guardar datos');
    }

    const onChangeNombre = (e) => {
        setNombre(e.target.value);
    }

    const onChangeIpv4 = (e) => {
        setIpv4(e.target.value);
    }

    const onChangePeripheral = (e) => {
        setPeripheral(e.target.value);
    }

    const onChangeGrupos = (e) => {
        setGrupos([]);
    }

    return (
        <Dashboard>
            <Grid item xs={12} sm={12} md={12}>
                <TituloPage titulo="Add Gateway" />
            </Grid>
            <Grid container spacing={1} className="container-usuarios" mt={2}>
                <Card className="card-usuarios">
                    <CardContent>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={4} mt={2}>
                                <TextField label="Nombre" type="text" variant="outlined"
                                    value={nombre} onChange={(e) => onChangeNombre(e)} size="small" />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} mt={2}>
                                <TextField label="Ipv4" type="text" variant="outlined" size="small"
                                    value={ipv4} onChange={(e) => onChangeIpv4(e)} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={4} mt={2}>
                                <TextField label="Peripheral" type="email" variant="outlined" size="small"
                                    value={peripheral} onChange={(e) => onChangePeripheral(e)} />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className="card-actions-usuarios">
                        <Button type="button" size="small" variant="contained" color="secondary"
                            onClick={onClickCancelarDatos}>
                            Cancelar
                        </Button>
                        <Button type="button" size="small" variant="contained" color="primary"
                            onClick={onClickGuardarDatos}>
                            Guardar
                        </Button>
                    </CardActions>
                </Card>

            </Grid>
        </Dashboard>
    );
}