import { Box,Button, styled ,Typography,Badge } from "@mui/material"; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState, useContext } from "react";
import {Link} from "react-router-dom";
import { UseSelector, useSelector } from "react-redux";

//components
import LoginDialog from "../login/loginDialog";
import { DataContext } from "../../context/DataProvider.jsx";
import Profile from "./profile";

const Wrapp=styled(Box)(({theme})=>({
display:'flex', 
margin:'0 3% 0 auto',

'&>*':{
    marginRight:'40px ! important ',
    fontSize:16,
    alignItems:'center'

}, 
[theme.breakpoints.down('md')]:{
    display:'block'
}


}))

const Cart=styled(Link)(({theme})=>({
    display:'flex',
    color:'white',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }

}))

const LoginButton=styled(Button)`

color:#2874f0;
background:#FFFFFF;
text-transform:none;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
heigth:32px;



`;

const CustomButtons=()=>{

    const [open,setOpen]=useState(false);

    const {acc,setAcc}=useContext(DataContext);

    const{cartItems}=useSelector(state=>state.cart)

    const openDialog=()=>{
        setOpen(true);
    }

    return (
        <Wrapp>
            {
                acc?<Profile acc={acc} setAcc={setAcc} />   :
                <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>

            }

        <Typography style={{marginTop:5, width:133 }}>   Become a Seller </Typography>
        <Typography  style={{marginTop:5, }}>  More  </Typography>

        <Cart to='/cart'>
            <Badge badgeContent={cartItems?.length } color="secondary">
              <ShoppingCartIcon/>
            </Badge>
              <Typography style={{marginLeft:10}}>Cart</Typography>
        </Cart>
        <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapp>
        
        
    )

}

export default CustomButtons;