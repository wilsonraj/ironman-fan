import React from 'react'
import './Sidebar.css';
import Sidebardata from './Sidebardata';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import StarIcon from '@material-ui/icons/Star';
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar() {
    return (
    <div className="sidebar-containter">
         <Sidebardata  id="sidemenu"Icon={AccountCircleIcon} selected={true} / > 
         <Sidebardata  id="sidemenu" Icon={HomeIcon}/> 
         <Sidebardata  id="sidemenu" Icon={StarIcon}/> 
         <Sidebardata  id="sidemenu" Icon={TrackChangesIcon}/> 
         <Sidebardata  id="sidemenu" Icon={TrackChangesIcon}/> 
         <Sidebardata  id="sidemenu" Icon={CameraAltIcon}/>
         <Sidebardata  id="sidemenu" Icon={SettingsIcon}/>  
      </div>
    );
}

export default Sidebar
