import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/AddListing.css';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';

// textarea
const blue = {
    100: '#DAECFF',
    200: '#b6daff',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    900: '#003A75',
  };
  
  const grey = {
    50: '#f6f8fa',
    100: '#eaeef2',
    200: '#d0d7de',
    300: '#afb8c1',
    400: '#8c959f',
    500: '#6e7781',
    600: '#57606a',
    700: '#424a53',
    800: '#32383f',
    900: '#24292f',
  };

const StyledTextarea = styled(TextareaAutosize)(
    ({ theme }) => `
    width: 100%;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  
    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

function ProfileDetails() {

  //image upload
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className='sub-content'>
        <div className='main'>
          <Container>
            <Box sx={{ width: '100%', typography: 'body1' }}>
       
                <div class="header_box">
                    <h4><PersonIcon sx={{fontSize: '24px'}}/> Profile Details</h4>  
                </div>  
                
                <Row className='form-sec'>
                    <Col lg={3} md={3} sm={12} className='form-group'>
                        <h6>Your Photo</h6>
                        <div className='inputTypeFile' style={{minHeight: '200px'}}>
                            <input type="file" onChange={handleImageUpload} />
                            {selectedImage && (
                                <img src={selectedImage} alt="Uploaded" style={{ width: '200px' }} />
                            )}
                        </div>
                    </Col>
                    <Col lg={9} md={9} sm={12} className='form-group'>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='form-group'>
                                <h6>Name</h6>
                                <TextField id="outlined-basic" label="Your Name" variant="outlined" />
                            </Col>
                            <Col lg={6} md={6} sm={12} className='form-group'>
                                <h6>Last Name</h6>
                                <TextField id="outlined-basic" label="Your Last Name" variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={6} md={6} sm={12} className='form-group'>
                                <h6>Telephone</h6>
                                <TextField type='number' id="outlined-basic" label="Your Telephone number" variant="outlined" />
                            </Col>
                            <Col lg={6} md={6} sm={12} className='form-group'>
                                <h6>Email</h6>
                                <TextField id="outlined-basic" label="Your Email" variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>Personal Info</h6>
                                <StyledTextarea
                                    aria-label="minimum height"
                                    minRows={3}
                                    placeholder="Write here ...."
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Box>
            <Row>
                <Col lg={6} md={6} sm={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
        
                        <div class="header_box">
                            <h4><PersonIcon sx={{fontSize: '24px'}}/> Change Password</h4>  
                        </div>  
                        <Row className='form-sec'>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>Old Password</h6>
                                <TextField id="outlined-basic" label="Old Password" variant="outlined" />
                            </Col>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>New Password</h6>
                                <TextField id="outlined-basic" label="New Password" variant="outlined" />
                            </Col>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>Confirm Password</h6>
                                <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
                            </Col>
                        </Row>
                    </Box>
                </Col>
                <Col lg={6} md={6} sm={12}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
        
                        <div class="header_box">
                            <h4><PersonIcon sx={{fontSize: '24px'}}/> Change Email</h4>  
                        </div>  
                        <Row className='form-sec'>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>Old Email</h6>
                                <TextField type="email" id="outlined-basic" label="Old Email" variant="outlined" />
                            </Col>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>New Email</h6>
                                <TextField type="email" id="outlined-basic" label="New Email" variant="outlined" />
                            </Col>
                            <Col lg={12} md={12} sm={12} className='form-group'>
                                <h6>Confirm new Email</h6>
                                <TextField type="email" id="outlined-basic" label="Confirm Email" variant="outlined" />
                            </Col>
                        </Row>
                    </Box>
                </Col>
            </Row>
           </Container>
        </div>        
    </div>
  )
}

export default ProfileDetails
