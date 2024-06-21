import React from 'react'
import {useState} from 'react'
import logo from "../Assets/Hydrochain.png";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
} from "@mui/material";;
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import InventoryIcon from '@mui/icons-material/Inventory';
import { Key } from '@mui/icons-material';

const Navbar = () => {
    const [OpenMenu,setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text:"Producers",
            icon:<HomeIcon/>
        },
        {
            text:"Storage",
            icon:<InventoryIcon />
        },
        {
            text:"Delivery",
            icon:<PhoneRoundedIcon/>
        },
        {
            text:"Profile",
            icon:<ShoppingCartRoundedIcon/>
        },
    ];
  return (
    <nav>
        <div className='nav-logo-container'>
            <img className='logo' src={logo} alt="" style={{ width: '300px'}}/>
        </div>
        <div className='navbar-links-container'>
            <a href=''>Producers</a>
            <a href=''>Storage</a>
            <a href=''>Delivery</a>
            <a href=''>Profile</a>
            <button className='primary-button'>Connect Wallet</button>            
        </div>
        <div className='navbar-menu-container'>
            <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
        </div>
        <Drawer open={OpenMenu} onClose={() => setOpenMenu(false)} anchor='right'>
            <Box
                sx={{width : 250}}
                role='presentation'
                onClick={() => setOpenMenu(false)}
                onKeyDown={() => setOpenMenu(false)}          
            >
                <List>
                    {menuOptions.map((item) => (
                    <ListItem Key={item.text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>
                        </ListItemButton>
                    </ListItem>
                    ))}                
                </List>
            </Box>
        </Drawer>
    </nav>
  )
}
export default Navbar