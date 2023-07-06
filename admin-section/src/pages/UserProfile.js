import React from 'react';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import AddListingTabs from '../components/AddListingForm/AddListingTabs';
import ProfileDetails from '../components/UserProfile/ProfileDetails';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function AddListing() {
  return (
    <div className="main-content">
      <Container maxWidth="lg" sx={{float: 'right', background: '#f8f8f8'}}>
        <div role="presentation" onClick={handleClick} className='breadcrumb'>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/" className='breadcrumb-dashboard'>
              Dashboard
            </Link>
            <Typography color="text.primary">Profile Details</Typography>
          </Breadcrumbs>
        </div>

        <ProfileDetails/>
      </Container>
    </div>
  )
}

export default AddListing
