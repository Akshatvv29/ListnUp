import React from 'react';
import "../Styles/LeftMenu.css";
import {FaSpotify, FaEllipsisH} from "react-icons/fa";
import {BiSearchAlt} from "react-icons/bi";
import {Menu} from "./Menu";
import {MenuList} from "./MenuList";
import { MenuPlayList } from './MenuPlayList';
import {TrackList} from './TrackList';
function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
      <div className="logo">
          <i>
            <FaSpotify />
          </i>

          <h2>ListenUp</h2>
        </div>
        <i>
          <FaEllipsisH />
        </i>
      </div>

      <div className='searchBox'>
        <input type="text" placeholder='Search..' />
        <i className='searchIcon'>
          <BiSearchAlt/>
        </i>
      </div>

      
      <Menu title={"Menu"} menuObject={MenuList}/>  {/*Prop, From MenuList the objcts are being passed and refered here*/}

        <MenuPlayList/>  

        <TrackList />  
    </div>
  );
} 

export {LeftMenu};