import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, Divider, Container} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Typography} from '@mui/material';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import '../assets/css/Navbar.css';
import { IconContext } from 'react-icons';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

//Search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Navbar() {

  //Message menu
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickMsg = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //handle scrolltotop click
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
      const handleScroll = () => {
      setScrollPosition(window.pageYOffset);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
      window.removeEventListener("scroll", handleScroll);
      };
  }, []);
  
  const handleClickScroll = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  };

  // Get the current route using react-router's useLocation hook
  const location = useLocation();

  // Define an array of paths where the sidebar should be hidden
  const hiddenPaths = ['/Invoice'];

  // Check if the current location matches any of the hidden paths
  const isSidebarHidden = hiddenPaths.includes(location.pathname);
  
  const [sidebar, setSidebar] = useState(true);
  
  const showSidebar = () => setSidebar(!sidebar);

  return  !isSidebarHidden ? (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Typography className="mobile-logo" variant='h6' component="div" 
            sx={{ flexGrow: 1, bgcolor: "#000", color: '#fff', marginLeft: '20px'}}>
                    < FastfoodIcon />Call4Need
          </Typography>
          
          <Box sx={{ display: { xs: 'none', md: 'flex', color: '#777', paddingRight: '25px' } }}>
            {/* message box */}
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            
              <Badge badgeContent={4} color="error" onClick={handleClickMsg}>
                <MailIcon />
              </Badge>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>New Messages:</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>Nitika Mittal</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleClose}>Saksham Agarwal</MenuItem>
                  <Divider />
                  <Link to='Messages' >
                    <MenuItem onClick={handleClose}>View All Messages:</MenuItem>
                  </Link>  
                </Menu>
            </IconButton>
            
            {/* search box */}
            <Search sx={{bgcolor: '#fff'}}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>

            {/* logout button */}
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit" sx= {{fontSize: '16px', fontWeight: '700'}}
            >
              <LogoutIcon sx= {{fontSize: '16px', fontWeight: '700'}}/> Logout
            </IconButton>
          </Box>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' >
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars' onClick={showSidebar}>
                <AiIcons.AiOutlineClose />
              </Link>
              <Typography className="mobile-logo" variant='h6' component="div" 
                sx={{ flexGrow: 1, bgcolor: "#000", color: '#fff', marginLeft: '20px'}}>
                        < FastfoodIcon />Call4Need
              </Typography>
            </li>
            {SidebarData.map((item, index) => {
              // Check if the item is the 'Invoice' item
              if (item.title === 'Invoice') {
                return (
                  <li key={index} className={item.cName}>
                    <a href={item.path} target="_blank" rel="noopener noreferrer">
                      {item.icon}
                      <span>{item.title}</span>
                    </a>
                  </li>
                );
              } else {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className='menu-title'>{item.title}</span>
                  </Link>
                </li>
              );
              }
            })}
          </ul>
        </nav>
       
      </IconContext.Provider>
      {scrollPosition > 50 && (
        <div className='visible' id="toTop" onClick={handleClickScroll}>
            <KeyboardArrowUpIcon className="toTopIcon"/>
        </div>
        )}
    </>
  ): null;
}

export default Navbar;