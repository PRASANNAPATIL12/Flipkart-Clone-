import Slide from "./slide";
import { Box,styled } from "@mui/material";


const Component=styled(Box)`
display:flex;

`

const LeftC=styled(Box)(({theme})=>({
width:'83%',
[theme.breakpoints.down('md')]:{
    width:'100%'
}

}))

const RightC=styled(Box)(({theme})=>({
background:'#ffff',
padding:5,
marginTop:10,
marginLeft:5,
width:'17%',
textAlign:'center',
width: 217,
height: 349,
marginBottom: -4,
[theme.breakpoints.down('md')]:{
    display:'none',
}
    
}));




const MidSlide=({products,title,timer})=>{
    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

    return (
        <Component>
                
                <LeftC>
                <Slide products={products} title={title} timer={timer}  />

                </LeftC>
                <RightC>
                    <img src={adURL} alt="addImg"  style={{width:217}} />

                </RightC>
        </Component>
    )
}

export default MidSlide;