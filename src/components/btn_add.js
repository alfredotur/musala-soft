import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function BTNADD(props) {
    const navigate = useNavigate();

    const onclickAdd = () => {
        navigate(props.ruta, { replace: true });
    }

    return (
        <Button size="small" color="primary" variant="contained" onClick={onclickAdd}>
            {props.texto}
        </Button>
    );
}