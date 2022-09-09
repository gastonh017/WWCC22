import React from 'react'
import '../App.css';
import { SidebarData } from './SidebarData';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <ul className='sidebarList'>
        {SidebarData.map((el, key)=>{
            return (
                <li className='row' key={key} onClick={()=> {window.location.pathname = el.link}}>
                {" "}
                <div id='icon'>{el.icon}</div> <div id='title'> {el.title}</div>
                </li>
            )
        })}
        </ul>
    </div>
  )
}
