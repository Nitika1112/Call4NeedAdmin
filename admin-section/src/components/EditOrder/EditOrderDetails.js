import React from 'react';
import Box from '@mui/material/Box';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Container, Row, Col } from 'reactstrap';
import editOrder from '../../assets/images/item_1.jpg';
import Button from '@mui/material/Button';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import dayjs from 'dayjs';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  overflow: 'scroll',
  height:'100%',
  display:'block',
  p: 4,
};

const closeBtnstyles ={
  position: 'absolute',
  top: '10px',
  right: '10px',
  backgroundColor: 'rgba(0, 0, 0, 0.04)',
  fontSize: '1.5rem',
  padding: '8px',
  borderRadius: '50%'
}

const paymentMethod = [
  {
    value: 'Paypal',
    label: 'Paypal',
  },
  {
    value: 'Credit Card',
    label: 'Credit Card',
  },
  {
    value: 'Cash',
    label: 'Cash',
  },
];

const withdrawalMethod = [
  {
    value: 'Delivery',
    label: 'Delivery',
  },
  {
    value: 'Take Away',
    label: 'Take Away',
  }
];

function EditOrderDetails() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='sub-content'>
        <div className='main'>
          <Container>
            <Box sx={{ width: '100%', typography: 'body1' }}>
            <div class="header_box">
                <h4><InsertDriveFileIcon /> Edit Order ID 12</h4>  
            </div>
            <div>
              <Row className='editOrder'>
                  <Col lg={2} md={2} sm={12}>
                      <figure style={{textAlign: 'center'}}>
                        <img src={editOrder} className="editOrder-img" alt="editOrder" />
                      </figure>
                  </Col>
                  <Col lg={10} md={10} sm={12}>
                      <Row>
                        <Col lg={7} md={7} sm={12}>
                          <h4>Spice Garden</h4>
                        </Col>
                        <Col lg={5} md={5} sm={12} style={{textAlign: 'end'}}>
                          <Button variant="contained" className='lisitingBtn' 
                            style={{background: '#e9ecef', color: '#868e96'}}>
                            <CheckCircleOutlineIcon/> Send Order
                          </Button>
                          <Button variant="contained" className='lisitingBtn' 
                            style={{marginLeft: '20px', background: '#e9ecef', color: '#868e96'}}>
                            <HighlightOffIcon /> Cancel
                          </Button>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12} md={12} sm={12} className='clientDetails'>
                          <ul>
                            <li><strong>Client</strong> Nitika Mittal</li>
                            <li><strong>Date and time</strong> 5 November 2020 08.30pm</li>
                            <li><strong>Address</strong> santpura, Modinagar, UttarPradesh</li>
                            <li><strong>Client Contacts</strong> 98432983242 - mark@hotmail.com</li>
                            <li><strong>Payment</strong> Paied via Paypal</li>
                            <li><strong>Withdrawal</strong> Delivery</li>
                          </ul>
                        </Col>
                        <Button variant="contained" className='lisitingBtn' 
                        onClick={handleOpen} style={{marginLeft: '20px'}}>
                          <EditIcon /> Edit order detail
                        </Button>
                      </Row>
                  </Col>
              </Row>
            </div>
            </Box>
          </Container>
          {/* edit order details modal box */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={styles}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Edit order detail
              </Typography>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={closeBtnstyles}
              >
                <CloseIcon />
              </IconButton>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                
                <Row className='form-sec'>
                  <Col lg={12} md={12} sm={12} className='form-group'>
                    <h6>Name</h6>
                    <TextField id="outlined-basic" variant="outlined" />
                  </Col>                  
                </Row>

                <Row className='form-sec'>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <h6>Date</h6>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker defaultValue={dayjs('2023-04-17')} />
                    </LocalizationProvider>
                  </Col>                  
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <h6>Time</h6>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimeField defaultValue={dayjs('2022-04-17T15:30')} />
                    </LocalizationProvider>
                  </Col>                  
                </Row>

                <Row className='form-sec'>
                  <Col lg={12} md={12 } sm={12} className='form-group'>
                    <h6>Address</h6>
                    <TextField id="outlined-basic" variant="outlined" />
                  </Col>                  
                </Row>

                <Row className='form-sec'>
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <h6>Telephone</h6>
                    <TextField type='number' id="outlined-basic" variant="outlined" />
                  </Col>                  
                  <Col lg={6} md={6} sm={12} className='form-group'>
                    <h6>Email</h6>
                    <TextField id="outlined-basic" variant="outlined" />
                  </Col>                  
                </Row>

                <Row className='form-sec'>
                  <Col lg={12} md={12 } sm={12} className='form-group'>
                    <h6>Payment method</h6>
                    <TextField
                      id="standard-select-currency"
                      select
                      defaultValue="Paypal"
                      variant="standard"
                      className='select-option'
                    >
                      {paymentMethod.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Col>                  
                </Row>

                <Row className='form-sec'>
                  <Col lg={12} md={12 } sm={12} className='form-group'>
                    <h6>Withdrawal method</h6>
                    <TextField
                      id="standard-select-currency"
                      select
                      defaultValue="Delivery"
                      variant="standard"
                      className='select-option'
                    >
                      {withdrawalMethod.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Col>                  
                </Row>
              </Typography>
              <Button variant="contained" className='lisitingBtn'>Save</Button>
            </Box>
          </Modal>
        </div>
    </div>
  )
}

export default EditOrderDetails
