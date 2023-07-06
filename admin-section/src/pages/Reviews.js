import React from 'react'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ReviewsTable from '../components/Reviews/ReviewsTable';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }

function Reviews() {
  return (
    <div className="main-content">
      <Container maxWidth="lg" sx={{float: 'right', background: '#f8f8f8'}}>
        <div role="presentation" onClick={handleClick} className='breadcrumb'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className='breadcrumb-dashboard'>
              Dashboard
            </Link>
            <Typography color="text.primary">Reviews</Typography>
          </Breadcrumbs>
        </div>

        <ReviewsTable/>
      </Container>
    </div>
  )
}

export default Reviews
