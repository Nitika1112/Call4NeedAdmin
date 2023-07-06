import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/Messages.css';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';

export default function MessagesTable() {
  
  const getRowClassName = (params) => {
    return 'custom-row';
  };

const rows = [
  { id: 1,
    Status: 'Cancelled',
    Name: 'Nitika Mittal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Date: randomCreatedDate(),
  },
  { id: 2,
    Status: 'Processed',
    Name: 'Saksham Agarwal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Date: randomCreatedDate(),
  },
];

const columns = [
  {
    field: 'image',
    width: 100,
    height: 150,
    renderCell: (params) => (
      <img src={params.value} alt={`Image ${params.row.id}`}
        style={{width: '70px', height: 'auto', borderRadius: '50%', alignSelf: 'flex-start', marginTop: '30px'}}
      />
    ),
  },
  {
    field: 'details',
    headerName: 'Details',
    width: 800,
    height: 150,
    renderCell: (params) => (
      <div style={{alignSelf: 'flex-start', marginTop: '30px'}}>
        <div style={{ fontSize: '16px' }}>{params.row.Status}</div>
        <div style={{ fontSize: '22px' }}>{params.row.Name}</div>
        <div style={{ whiteSpace: 'pre-line', marginTop: '8px', fontSize: '15px' }}>{params.row.description}</div>
      </div>
    ),
  },
  {
    field: 'Date',
    type: 'number',
    width: 120,
    height: 150,
    type: 'date',
  }
];

  return (
    <div className='sub-content'>
    <div className='main'>
      <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <div class="header_box">
              <h5> Inbox</h5>  
          </div> 
          <DataGrid
          rows={rows}
          columns={columns}
          getRowClassName={getRowClassName}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          
          />
        </Box>
      </Container>    
    </div>
    </div>
  );
}
