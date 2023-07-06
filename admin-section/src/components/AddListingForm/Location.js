import React from 'react'
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/AddListing.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Location() {
  return (
    <div>
        <div class="header_box">
        <h4><LocationOnIcon /> Location</h4>  
        </div>  
        
        <Row className='form-sec'>
        <Col lg={6} md={6} sm={12} className='form-group'>
            <h6>Select City</h6>
            <TextField id="outlined-basic" variant="outlined" />
        </Col>
        <Col lg={6} md={6} sm={12} className='form-group'>
            <h6>Address</h6>
            <TextField id="outlined-basic" variant="outlined" />
        </Col>
        </Row>

        <Row className='form-sec'>
        <Col lg={6} md={6} sm={12} className='form-group'>
            <h6>State</h6>
            <TextField id="outlined-basic" variant="outlined" />
        </Col>
        <Col lg={6} md={6} sm={12} className='form-group'>
            <h6>Zip Code</h6>
            <TextField id="outlined-basic" variant="outlined" />
        </Col>
        </Row>
          
    </div>
  )
}

export default Location
