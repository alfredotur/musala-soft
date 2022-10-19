import {Backdrop} from "@mui/material";
import {CircularProgress} from "@mui/material";
import './css/loader.css';
import {useEffect, useState} from "react";

export default function Loader(props) {
    const [open, setOpen] = useState(props.open);

    useEffect(() => {
        setOpen(props.open)
    }, [props.open])

    return (
        <div>
            <Backdrop open={open} id="backdrop">
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    )
}

