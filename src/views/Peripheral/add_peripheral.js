import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, CardActions, CardContent, FormControl, Grid, TextField, Checkbox,FormControlLabel, FormGroup } from "@mui/material";
import Dashboard from "../../layout/dashboard";
import TituloPage from "../../components/titulo_page";
import * as Swal from 'sweetalert2';
import './css/grupos.css';

export default function AddPeripherals() {

    const navigate = useNavigate();

    const [vendor, setVendor] = useState('');
    const [date, setDate] = useState('');
    const [status, setStatus] = useState(false);

    useEffect(() => {

    }, [])

    const onChangeVendor = (event) => {
        setVendor(event.target.value);
    }

    const onChangeDate = (event) => {
        setDate(event.target.value);
    }
    const limpiarDatos = () => {
        setVendor('');
        setDate('');
        setStatus(false);
        navigate("/peripheral", { replace: true });

    }

    const guardarDatos = () => {
        if (vendor === '') {
            Swal.fire({
                icon: 'error',
                text: 'El campo Vendor es obligatorio.'
            });
            return;
        }
        alert('guardar datos')
    }

    return (
        <Dashboard>
            <Grid item xs={12} sm={12} md={12}>
                <TituloPage titulo="Add peripheral" />
            </Grid>
            <Grid container spacing={0} className="container" mt={1}>
                <Card className="card-grupos">
                    <CardContent>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={4}>
                                <FormControl>
                                    <TextField label="Vendor" variant="outlined" size="small"
                                        onChange={(e) => onChangeVendor(e)} value={vendor} />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <FormControl>
                                    <TextField
                                        id="date"
                                        label="Birthday"
                                        type="date"
                                        defaultValue="2017-05-24"
                                        value={date}
                                        onChange={(e)=>onChangeDate(e)}
                                        sx={{ width: 220 }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        size="small"
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12} md={4}>
                                <FormGroup>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Online" />
                                </FormGroup>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <CardActions className="card-actions">
                        <Button type="button" size="small" color="secondary" variant="contained"
                            onClick={limpiarDatos}>
                            Cancelar
                        </Button>
                        <Button type="button" size="small" color="primary" variant="contained"
                            onClick={guardarDatos}>
                            Aceptar
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </Dashboard>
    );
}