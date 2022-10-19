import { Typography } from "@mui/material";
import './css/titulo_page.css';

export default function TituloPage({ titulo }) {

    return (
        <Typography className="texto_titulo"> {titulo} </Typography>
    )
}