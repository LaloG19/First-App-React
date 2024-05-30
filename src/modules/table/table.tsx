import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, Paper, Grid, Typography } from '@mui/material';

const MyTable = () => {
/*     const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'date', headerName: 'Fecha', width: 150 },
        { field: 'description', headerName: 'Descripción', width: 300 },
        { field: 'amount', headerName: 'Monto', width: 150 },
    ];
    const rows2 = [
        { id: 1, date: '01/01/2021', description: 'Compra de producto', amount: 100 },
        { id: 2, date: '01/02/2021', description: 'Venta de producto', amount: 150 },
        { id: 3, date: '01/03/2021', description: 'Compra de producto', amount: 200 },
        { id: 4, date: '01/04/2021', description: 'Venta de producto', amount: 250 },
        { id: 5, date: '01/05/2021', description: 'Compra de producto', amount: 300 },
        { id: 6, date: '01/06/2021', description: 'Venta de producto', amount: 350 },
        { id: 7, date: '01/07/2021', description: 'Compra de producto', amount: 400 },
        { id: 8, date: '01/08/2021', description: 'Venta de producto', amount: 450 },
        { id: 9, date: '01/09/2021', description: 'Compra de producto', amount: 500 },
        { id: 10, date: '01/10/2021', description: 'Venta de producto', amount: 550 },
    ]; */

    
    const [rows2, setRows2] = useState([]);

    useEffect(() => {   
        fetchData();
      }, []);

    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const data = response.data;
        console.log(data);
        setRows2(data);
        } catch (error) {
          console.error('Error cargando datos: \n', error);
        }
    };

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'title',
            headerName: 'Titulo',
            width: 150,
            editable: true,
        },
        {
            field: 'category',
            headerName: 'Categoria',
            width: 150,
            editable: true,
        },
        {
            field: 'price',
            headerName: 'Precio',
            type: 'number',
            width: 110,
        }
    ];

    return (
        <>
            <Box>
                <Paper>
                    <Grid item xs={12} md={12} lg={12}>
                        <Typography><strong>Fake Store</strong></Typography>
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                        <DataGrid
                            rows={rows2}
                            columns={columns}
                            initialState={{
                            pagination: {
                                paginationModel: {
                                pageSize: 5,
                                },
                            },
                            }}
                            pageSizeOptions={[5]}
                        />
                    </Grid>            
                </Paper>
            </Box>
        </>
    )
}

export default MyTable;