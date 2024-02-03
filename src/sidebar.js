import { Avatar, IconButton, Input } from '@mui/material'
import React from 'react'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import './sidebar.css';
import SidebarChats from './SidebarChats';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar/>
        <div className='header_right'>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
           
        </div>
      </div>
      <div className="sidebar_search">
          <div className="sidebar__searchContent">
          <SearchIcon/>
          <input type="text" placeholder="Search"></input>
          </div>
      </div>
      <div className='sidebar_chats'>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        
      </div>
    </div>
  )
}

export default Sidebar
