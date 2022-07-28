import React from 'react';
import './sidebar.scss';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import NotesIcon from '@mui/icons-material/Notes';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <AcUnitIcon className="icon" />
        <span className="logo">Ini Logo</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <div className="title">MAIN</div>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>

          <div className="title">LISTS</div>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <StoreMallDirectoryIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>

          <div className="title">USEFUL</div>
          <li>
            <EqualizerIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" />
            <span>Notifications</span>
          </li>

          <div className="title">SERVICE</div>
          <li>
            <SettingsSystemDaydreamIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <NotesIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>

          <div className="title">USER</div>
          <li>
            <AccountBoxIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
