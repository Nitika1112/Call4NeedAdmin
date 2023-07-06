import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Container, Row, Col } from 'reactstrap';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ListIcon from '@mui/icons-material/List';
import BasicInfo from './BasicInfo';
import Location from './Location';
import Opening from './Opening';
import MenuList from './MenuList';

export default function AddListingTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className='sub-content'>
        <div className='main'>
          <Container>
            <Box sx={{ width: '100%', typography: 'body1' }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab icon={<InsertDriveFileIcon />} label="Basic Info" value="1" />
                    <Tab icon={<LocationOnIcon />} label="Location" value="2" />
                    <Tab icon={<AccessTimeIcon />} label="Opening" value="3" />
                    <Tab icon={<ListIcon />} label="Add Item to Menu List" value="4" />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  < BasicInfo />
                </TabPanel>
                <TabPanel value="2">
                  < Location />
                </TabPanel>
                <TabPanel value="3">
                  < Opening />
                </TabPanel>
                <TabPanel value="4">
                  < MenuList />
                </TabPanel>
              </TabContext>
            </Box>
          </Container>
        </div>
    </div>
  );
}
