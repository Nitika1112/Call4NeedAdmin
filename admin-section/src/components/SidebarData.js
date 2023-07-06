import React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import EditIcon from '@mui/icons-material/Edit';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ReviewsIcon from '@mui/icons-material/Reviews';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <HomeIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/Messages',
    icon: <MessageIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Add listing + Menu List',
    path: '/AddListing',
    icon: <AddCircleIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Orders',
    path: '/Orders',
    icon: <ShoppingBasketIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Edit Order',
    path: '/editOrder',
    icon: <EditIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Invoice',
    path: '/Invoice',
    icon: <InsertDriveFileIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Reviews',
    path: '/Reviews',
    icon: <ReviewsIcon />,
    cName: 'nav-text'
  },
  {
    title: 'Bookmarks',
    path: '/Bookmarks',
    icon: <FavoriteIcon />,
    cName: 'nav-text'
  },
  {
    title: 'My Profile',
    path: '/UserProfile',
    icon: <PersonIcon />,
    cName: 'nav-text'
  },
];