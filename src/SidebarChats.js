import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './sidebar.css';
function SidebarChats({addnewchat}) {

  const [seed,SetSeed]=useState("") ;
 
  useEffect(()=>{
    SetSeed(Math.floor(Math.random()* 5000))
  },[])
  return (
    !addnewchat ? (
      <div className='sidebar_chat'>
      <Avatar src="https://api.dicebear.com/7${seed}.x/pixel-art/svg"/>
      <div className='sidebar_chatInfo'>
      <h2>Rahul Saini</h2>
      <p>Last Message...</p>
      </div>
      
    </div>
    ) : ( 
      <div className='sidebar_chat'>
        <h2>Add New Chat</h2>
      </div>
    )
    
  )
}

export default SidebarChats
