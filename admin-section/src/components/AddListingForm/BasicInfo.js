import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/AddListing.css';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import MenuItem from '@mui/material/MenuItem';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

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

const category = [
  {
    value: 'Italian',
    label: 'Italian',
  },
  {
    value: 'EUR',
    label: 'North Indian',
  },
  {
    value: 'Chienese',
    label: 'Chienese',
  },
  {
    value: 'All',
    label: 'All',
  },
];

function BasicInfo() {

  //image upload
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const imagesArray = [];
  
    // Convert the FileList object to an array
    for (let i = 0; i < files.length; i++) {
      imagesArray.push(files[i]);
    }
  
    setSelectedImages(imagesArray);
  };

  return (
    <div>
       
          <div class="header_box">
            <h4><InsertDriveFileIcon /> Basic info</h4>  
          </div>  
          
          <Row className='form-sec'>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <h6>Listing Title</h6>
              <TextField id="outlined-basic" label="The Ethinic Cuisine" variant="outlined" />
            </Col>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <h6>Category</h6>
              <TextField
                id="standard-select-currency"
                select
                defaultValue="EUR"
                variant="standard"
                className='select-option'
              >
                {category.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Col>
          </Row>

          <Row className='form-sec'>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <h6>Keywords</h6>
              <TextField id="outlined-basic" label="Keywords" variant="outlined" />
            </Col>
            <Col lg={6} md={6} sm={12} className='form-group'>
              <h6>Type</h6>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
                <FormControlLabel value="Both" control={<Radio />} label="Both" />
              </RadioGroup>
            </Col>
          </Row>

          <Row className='form-sec'>
            <Col lg={12} md={12} sm={12} className='form-group'>
              <h6>Description</h6>
              <StyledTextarea
                aria-label="minimum height"
                minRows={3}
                placeholder="Write here ...."
              />
            </Col>
          </Row>

          <Row className='form-sec'>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Phone (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Website (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Email (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
          </Row>
          
          <Row className='form-sec'>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Facebook link (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Twitter link (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
            <Col lg={4} md={4} sm={12} className='form-group'>
              <h6>Google + (Optional)</h6>
              <TextField id="outlined-basic" variant="outlined" />
            </Col>
          </Row>

          <Row className='form-sec'>
            <Col lg={12} md={12} sm={12} className='form-group'
             style={{maxWidth: '100%', overflowX: 'scroll'}}>
              <h6>Photos</h6>
              <div className='inputTypeFile'>
                <input type="file" multiple onChange={handleImageUpload} />
                {selectedImages.map((image, index) => (
                  <img src={URL.createObjectURL(image)} key={index} alt={`image-${index}`}
                   style={{ width: '150px' }} />
                ))}
              </div>
            </Col>
          </Row>
       
    </div>
  )
}

export default BasicInfo
