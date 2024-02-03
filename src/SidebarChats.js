import { Avatar } from '@mui/material'
import React from 'react'
import './sidebar.css';
function SidebarChats() {
  return (
    <div className='sidebar_chat'>
      <Avatar/>
      <div className='sidebar_chatInfo'>
      <h2>Rahul Saini</h2>
      <p>Last Message</p>
      </div>
      
    </div>
  )
}

export default SidebarChats
