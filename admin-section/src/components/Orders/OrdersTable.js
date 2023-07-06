import React, { useState }  from 'react';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/Orders.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'; 
import {  DataGrid, GridActionsCellItem, GridRowId, GridColDef, } from '@mui/x-data-grid';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import {Link} from 'react-router-dom';

const OrdersTable = () => {
  const [data, setData] = useState([
    { id: 1, User: 'Snow', Resturant: 'Jon', Date: randomCreatedDate(), Status: 'Pending'},
    { id: 2, User: 'Lannister', Resturant: 'Cersei', Date: randomCreatedDate(), Status: 'Cancelled' },
    { id: 3, User: 'Lannister', Resturant: 'Jaime', Date: randomCreatedDate(), Status: 'Processed'},
    { id: 4, User: 'Stark', Resturant: 'Arya', Date: randomCreatedDate(), Status: 'Pending'},
    { id: 5, User: 'Targaryen', Resturant: 'Daenerys', Date: randomCreatedDate(), Status: 'Cancelled'},
    { id: 6, User: 'Melisandre', Resturant: null, Date: randomCreatedDate(), Status: 'Processed'},
    { id: 7, User: 'Clifford', Resturant: 'Ferrara', Date: randomCreatedDate(), Status: 'Pending'},
    { id: 8, User: 'Frances', Resturant: 'Rossini', Date: randomCreatedDate(), Status: 'Cancelled'},
    { id: 9, User: 'Roxie', Resturant: 'Harvey', Date: randomCreatedDate(), Status: 'Pending'},
  ]);

  
const handleDeleteRow = (id) => {
  const confirmed = window.confirm('Are you sure you want to delete this row?');
  if (confirmed) {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  }
};

const columns = [
  { 
    field: 'id',
    headerName: 'ID',
    width: 90,
    style: {
        background: '#000',
      },
  },
  { 
    field: 'Resturant', 
    headerName: 'Resturant', 
    width: 160 
  },
  { 
    field: 'User', 
    headerName: 'User',
    width: 200 },
  {
    field: 'Date',
    headerName: 'Date',
    type: 'date',
    width: 150,
  },
  {
    field: 'Status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 140,
  },
  {
    field: 'action',
    headerName: 'Action',
    width: 180,
    sortable: false,
    disableClickEventBubbling: true,
    
    renderCell: (params) => {
      const handleEdit = () => {
        const id = params.value;
        window.location.href = `/EditOrder`;
      };
      
  return (
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="warning" size="small" onClick={handleEdit}>Edit</Button>
            <Button variant="outlined" color="error" size="small" 
              aria-label="delete"
              onClick={() => handleDeleteRow(params.row.id)}>
              Delete
            </Button>
          </Stack>
        );
    },
  }
  
];

const getStatusCellClassName = (params) => {
  const status = params.value;

  if (status === 'Pending') {
    return 'pending-status-cell';
  }
  else if (status === 'Cancelled') {
    return 'Cancelled-status-cell';
  }
  else if (status === 'Processed') {
    return 'Processed-status-cell';
  }

  return '';
};

  return (
    <div className='sub-content'>
        <div className='main'>
          <Container>
            <div style={{ height: 400, width: '100%', marginBottom: '55px' }}>
            <div className='content-heading'> 
                <h5>< ViewModuleIcon /> Orders Table Example</h5>
            </div>    
            <DataGrid
                rows={data}
                columns={columns}
                getCellClassName={getStatusCellClassName}
                initialState={{
                pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: 'primary.light',
                  '& .MuiDataGrid-cell:hover': {
                    color: 'primary.main',
                  },
                }}
            />
            </div>
          </Container>
        </div>
    </div>
  );
}

export default OrdersTable;