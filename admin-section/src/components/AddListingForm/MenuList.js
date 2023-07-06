import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Container, Row, Col } from 'reactstrap';
import '../../assets/css/AddListing.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import ListIcon from '@mui/icons-material/List';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Divider } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function MenuList() {
    const [accordions, setAccordions] = useState([{ id: 1 }]);

    const addAccordion = () => {
      const newAccordionId = accordions.length + 1;
      setAccordions([...accordions, { id: newAccordionId }]);
    };
  
    const removeAccordion = (id) => {
      const filteredAccordions = accordions.filter((accordion) => accordion.id !== id);
      setAccordions(filteredAccordions);
    };
  
  return (
    <div>
      
    <div class="header_box">
        <h4><ListIcon /> Add item to Menu List</h4>  
    </div>  
    <div>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <h6>Menu Category</h6>
                <TextField id="outlined-basic" label="Ex Starters" variant="outlined" />
            </Col>
        </Row>
    </div>

    {accordions.map((accordion) => (
    <Accordion key={accordion.id}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
          Menu Item #{accordion.id}
          </Typography>
          <RemoveCircleIcon 
            onClick={() => removeAccordion(accordion.id)} 
            style={{marginLeft: '10px', fontSize: '22px', color: '#e54750'}}
          /> 
        </AccordionSummary>
        <Divider style={{marginBottom: '20px'}} />
        <AccordionDetails>
          <Typography>
            <Row className='form-sec'>
                <Col lg={3} md={3} sm={12} className='form-group'>
                    <div className='inputTypeFile'>
                    < input type='file' name='file' onChange={(e)=>this.onChange(e)} />
                    </div>
                </Col>
                <Col lg={9} md={9} sm={12} className='form-group'>
                    <Row className='form-sec'>
                    <Col lg={8} md={8} sm={12} className='form-group'>
                        <h6>Title</h6>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </Col>
                    <Col lg={4} md={4} sm={12} className='form-group'>
                        <h6>Price</h6>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </Col>
                    </Row>
                    <Row className='form-sec'>
                    <Col lg={12} md={12} sm={12} className='form-group'>
                        <h6>Short Description</h6>
                        <TextField id="outlined-basic" label="" variant="outlined" />
                    </Col>
                    </Row>

                    <div> 
                    <h6>Item options</h6>
                    <Row className='form-sec' style={{backgroundColor: '#f4f4f4', padding: '14px 0px 0px 0px', marginBottom: '15px'}}>
                        <Col lg={3} md={3} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="+ Rs.3.50" variant="outlined" />
                        </Col>
                        <Col lg={4} md={4} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="Ex. Medium" variant="outlined" />
                        </Col>
                        <Col lg={5} md={5} sm={12} className='form-group'>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue="Delivery"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                        <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
                        </RadioGroup>
                        </Col>
                    </Row>
                    <Row className='form-sec'>
                        <Col lg={3} md={3} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="+ Rs.5.50" variant="outlined" />
                        </Col>
                        <Col lg={4} md={4} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="Ex. Large" variant="outlined" />
                        </Col>
                        <Col lg={5} md={5} sm={12} className='form-group'>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue="Delivery"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                        <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
                        </RadioGroup>
                        </Col>
                    </Row>
                    </div>

                    <div> 
                    <h6>Item Ingredients</h6>
                    <Row className='form-sec' style={{backgroundColor: '#f4f4f4', padding: '14px 0px 0px 0px', marginBottom: '15px'}}>
                        <Col lg={3} md={3} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="+ Rs.3.50" variant="outlined" />
                        </Col>
                        <Col lg={4} md={4} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="Ex. Medium" variant="outlined" />
                        </Col>
                        <Col lg={5} md={5} sm={12} className='form-group'>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue="Delivery"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                        <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
                        </RadioGroup>
                        </Col>
                    </Row>
                    <Row className='form-sec'>
                        <Col lg={3} md={3} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="+ Rs.5.50" variant="outlined" />
                        </Col>
                        <Col lg={4} md={4} sm={12} className='form-group'>
                        <TextField id="outlined-basic" label="Ex. Large" variant="outlined" />
                        </Col>
                        <Col lg={5} md={5} sm={12} className='form-group'>
                        <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        defaultValue="Delivery"
                        name="row-radio-buttons-group"
                        >
                        <FormControlLabel value="Delivery" control={<Radio />} label="Delivery" />
                        <FormControlLabel value="Takeaway" control={<Radio />} label="Takeaway" />
                        </RadioGroup>
                        </Col>
                    </Row>
                    </div> 
                </Col>
            </Row>
          </Typography>
        </AccordionDetails>
    </Accordion>
     ))}
    <div style={{marginTop: '20px'}}>
        <Button variant="contained" className='lisitingBtn'>Save</Button>
        <Button variant="contained" className='lisitingBtn' 
            style={{marginLeft: '20px'}}
            onClick={addAccordion} 
        >
           <AddCircleIcon /> &nbsp; Add another item
        </Button>
    </div>
    </div>
  )
}

export default MenuList
