import React from 'react'
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/AddListing.css';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

function Opening() {
  return (
    <div>
        <div class="header_box">
            <h4><AccessTimeIcon /> Opening</h4>  
        </div>  
        {/* Monday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Monday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Tuesday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Tuesday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Wednesday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Wednesday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Thrusday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Thrusday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Friday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Friday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Saturday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Saturday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        {/* Sunday */}
        <Row className='form-sec'>
            <Col lg={2} md={2} sm={12} className='form-group'>
            <h6>Sunday</h6>
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Opening Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
            <Col lg={5} md={5} sm={12} className='form-group'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['TimePicker']}>
                        <TimePicker label="The Closing Timing" />
                    </DemoContainer>
                </LocalizationProvider>   
            </Col>
        </Row>
        
    </div>
  )
}

export default Opening
