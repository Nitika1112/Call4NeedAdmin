import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'; 
import Dashboard from './pages/Dashboard';
import AddListing from './pages/AddListing';
import Orders from './pages/Orders';
import EditOrder from './pages/EditOrder';
import Invoice from './pages/Invoice';
import Reviews from './pages/Reviews';
import Bookmarks from './pages/Bookmarks';
import Messages from './pages/Messages';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="/Messages" exact element={<Messages />} />
          <Route path="/AddListing" exact element={<AddListing />} />
          <Route path="/Orders" exact element={<Orders />} />
          <Route path="/EditOrder" exact element={<EditOrder />} />
          <Route path="/Invoice" exact element={<Invoice />} />
          <Route path="/Reviews" exact element={<Reviews />} />
          <Route path="/Bookmarks" exact element={<Bookmarks />} />
          <Route path="/UserProfile" exact element={<UserProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;