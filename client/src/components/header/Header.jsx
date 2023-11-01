
import{AppBar,Toolbar,Box, Typography,IconButton,Drawer, List,ListItem ,styled} from '@mui/material';
import { Link } from 'react-router-dom';
import {Menu} from '@mui/icons-material';
import { useState } from 'react';
  
//components
import Search from './Search';
import CustomButtons from './CustomButtons';    


const StyledHeader=styled(AppBar)`
background:#2874f0;
height: 55px;
`;

const Component=styled(Link)`
  margin-left:12%;
  line-height:0;
  width:6;
  height:6; 
  text-decoration:none;
  color:inherit;
`;

const SubHeading=styled(Typography)`
    font-size:10px;
    font-style:italic;
    
`;

const PlusImage=styled('img')({
    width:8,
    height: 8,
    marginLeft:3
    
})

const CustomButtonsWrapper=styled(Box)(({theme})=>({
    
    margin:'0 3% 0 auto',
    [theme.breakpoints.down('md')]:{
        display:'none'
    }
}))

const MenuButton=styled(IconButton)(({theme})=>({
    display:'none',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}))





const Header=()=>{

    const logoUrl='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png'
    const subUrl= 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

     const [open, setopen] = useState(false)

    const handleOpen=()=>{
            setopen(true);
    }
    const handleClose=()=>{
        setopen(false);

    }

    const list=()=>(
        <Box style={{width:200}} onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )
    

    return(

        <StyledHeader>
           <Toolbar style={{ minHeight: 55}}>
            <MenuButton color='inherit' onClick={handleOpen} >
                <Menu/>
            </MenuButton>
            <Drawer open={open} onClose={handleClose} >
                {list()}
            </Drawer>
                <Component to='/'>
                    <img src={logoUrl} alt="logo" style={{width:75}} />
               
                <Box style={{display:'flex' , width:45 }}>
                    <SubHeading>Explore&nbsp;
                        <Box component='span' style={{color:'#ffe500'}}>Plus</Box>
                    </SubHeading>
                        <   PlusImage src={subUrl} alt="sublogo" />
                </Box>
                </Component>
                <Search/>
                <CustomButtonsWrapper>
                <CustomButtons/>
                </CustomButtonsWrapper>
           </Toolbar>
        </StyledHeader>
        )
}

export default Header;