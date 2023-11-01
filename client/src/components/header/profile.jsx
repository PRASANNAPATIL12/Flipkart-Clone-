import { Typography ,Box,Menu,MenuItem,styled} from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component=styled(Menu)`
margin-top:5px;
`;

const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`


const Profile=({acc,setAcc})=>{

    const [open,setOpen]=useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const handleClose=()=>{
        setOpen(false);
    }

    const logoutUser=()=>{
        setAcc('');
    }

    return(
        <>
        <Box>
            <Typography onClick={handleClick} style={{marginTop:13 ,cursor:"pointer"}} >{acc}</Typography>
        </Box>
        <Component
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}  >
               
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}>

        <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout> Logout</Logout> 
            
        </MenuItem>

      </Component>
        </>

    )
}

export default Profile;