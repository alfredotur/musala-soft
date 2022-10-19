import { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import Dashboard from "../../layout/dashboard";
import TituloPage from "../../components/titulo_page";
import BTNADD from "../../components/btn_add";
import { Delete, Edit } from "@mui/icons-material";

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import './css/grupos.css';

const columns = [
    { id: 'uid', label: 'Uid', minWidth: 170 },
    { id: 'vendor', label: 'Vendor', minWidth: 100 },
    { id: 'datecreated', label: 'Date created', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 100 },
    {
        id: 'acciones',
        label: 'Actions',
        minWidth: 70,
        align: 'center'
    },
];

function createData(uid,vendor, datecreated, status, acciones) {

    return { uid,vendor, datecreated, status, acciones };
}

const rows = [
    createData('sdf233', 'Vendor 1','2022-10-09', 'Online', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('hjh78987', 'Vendor 2','2022-10-09', 'offline', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('gfg766', 'Vendor 3', '2022-10-09','Online', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('980mniid', 'Vendor 4','2022-10-09', 'offline', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('0ofokknvb', 'Vendor 5', '2022-10-09','Online', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('minb34', 'Vendor 6', '2022-10-09','offline', <div><IconButton><Edit color="primary" /></IconButton></div>),
    createData('lny98789', 'Vendor 7','2022-10-09', 'Online', <div><IconButton><Edit color="primary" /></IconButton></div>),
    
];

export default function Grupos() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    useEffect(() => {

    }, [])

    return (
        <Dashboard>
            <Grid item xs={12} sm={12} md={12}>
                <TituloPage titulo="Peripherals" />
            </Grid>

            <Grid container spacing={1} mt={2}>
                <Grid item xs={12} sm={12} md={12}>
                    <BTNADD texto="Add peripheral" ruta="/addperipheral" />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {

                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>

            </Grid>
        </Dashboard>
    );
}