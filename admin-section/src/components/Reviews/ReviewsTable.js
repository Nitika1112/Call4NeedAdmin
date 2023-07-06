import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/Reviews.css';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReviewsTable() {
  
  const getRowClassName = (params) => {
    return 'custom-row';
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const rows = [
  { id: 1,
    Name: 'Nitika Mittal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Rate: 'Rate: 8.5',
  },
  { id: 2,
    Name: 'Saksham Agarwal',
    description: 'Ex omnis error aliquam quo, eu eos atqui accusam, ex nec sensibus erroribus principes. No pro albucius eloquentiam accommodare. Mei id illud posse persius. Nec eu dico lucilius delicata, qui propriae voluptaria eu.',
    image: (require('../../assets/images/item_1.jpg')),
    Rate: 'Rate: 7.5',
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
        <div style={{ fontSize: '22px' }}>{params.row.Name}</div>
        <div style={{ whiteSpace: 'pre-line', marginTop: '8px', fontSize: '15px' }}>{params.row.description}</div>
        {params.row.id && (
          <Button variant="contained" 
            style={{background: '#e9ecef', color: '#868e96', border: 'none', outline: 'none',
            padding: '10px 15px',borderRadius: '25px', fontSize: '13px', textTransform: 'capitalize',
            boxShadow: 'none', marginTop: '25px'}}
            onClick={handleOpen}>
            <ReplyIcon/> Reply to This Review
          </Button>
        )}
      </div>
    ),
  },
  {
    field: 'Rate',
    type: 'number',
    width: 120,
    height: 150
  },
  
];

  return (
    <div className='sub-content'>
    <div className='main'>
      <Container>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <div class="header_box">
              <h5> Reviews List</h5>  
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
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Reply to review
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <TextField
                  id="outlined-multiline-flexible"                 
                  multiline
                  rows={3}
                />
                <Button variant="contained" className='rplyBtn'>
                  Reply
                </Button>
              </Typography>
            </Box>
          </Modal>
        </Box>
      </Container>    
    </div>
    </div>
  );
}
