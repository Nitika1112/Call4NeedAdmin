import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/Reviews.css';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function BookmarksTable() {
  
  const getRowClassName = (params) => {
    return 'custom-row';
  };

  const [data, setData] = useState([
  { id: 1,
    Dish: 'Pizza- Italian',
    Name: 'Nitika Mittal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Rate: 'Rate: 8.5',
  },
  { id: 2,
    Dish: 'Pizza- Italian',
    Name: 'Saksham Agarwal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Rate: 'Rate: 7.5',
  },
]);

const handleDeleteRow = (id) => {
  const confirmed = window.confirm('Are you sure you want to delete this row?');
  setTimeout(() => {
  if (confirmed) {
    setData((prevData) => prevData.filter((row) => row.id !== id));
  }
}, 150);
};

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
        <div style={{ fontSize: '16px' }}>{params.row.Dish}</div>
        <div style={{ fontSize: '22px' }}>{params.row.Name}</div>
        <div style={{ whiteSpace: 'pre-line', marginTop: '8px', fontSize: '15px' }}>{params.row.description}</div>
        {params.row.id && (
          <Button variant="contained" 
            style={{background: '#e9ecef', color: '#868e96', border: 'none', outline: 'none',
            padding: '10px 15px',borderRadius: '25px', fontSize: '13px', textTransform: 'capitalize',
            boxShadow: 'none', marginTop: '25px'}}
           >
            <RemoveRedEyeIcon/> &nbsp; View Item
          </Button>
        )}
      </div>
    ),
  },
  {
    field: 'Rate',
    type: 'number',
    width: 120,
    height: 150,
    renderCell: (params) => (
        <div style={{alignSelf: 'flex-start', marginTop: '30px'}}>
          {params.row.id && (
            <Button variant="contained" 
              style={{background: '#e9ecef', color: '#868e96', border: 'none', outline: 'none',
              padding: '10px 15px',borderRadius: '25px', fontSize: '13px', textTransform: 'capitalize',
              boxShadow: 'none', marginTop: '25px'}}
              aria-label="delete"
              onClick={() => handleDeleteRow(params.row.id)}
             >
              <HighlightOffIcon/>&nbsp; Cancel
            </Button>
          )}
        </div>
    ), 
  }
  
];

  return (
    <div className='sub-content'>
    <div className='main'>
      <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <div class="header_box">
              <h5> Bookmarks</h5>  
          </div> 
          <DataGrid
          rows={data}
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
