
import { Box,styled,Typography ,Button} from "@mui/material";
import{removeFromCart} from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";


import { addEllipsi } from "../../utils/common-utils";
import ButtonGroup from './ButtonGroup';

const Component=styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:#fff;

`
const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;

`
const SmallText=styled(Typography)`
margin-top:10px;
color:#878787;
font-size:14px;

`
const Remove=styled(Button)`
margin-top:20px;
color:#000;
font-size:16px;
font-weight:600;
`

const CartItem=({item})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

    const dispatch=useDispatch();

    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }

    return (
     <Component>
        <LeftComponent>
            <img src={item.url} alt="productImg" style={{height:110,width:110}} />
            <ButtonGroup/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipsi(item.title.longTitle)}</Typography>
            <SmallText>Seller:RetailNet
                <Box component='span'><img src={fassured} alt="assured" style={{width:50,marginLeft:10}} /></Box>
            </SmallText >
                 <Typography style={{margin:'20px 0'}}>
                    <Box component='span' style={{fontWeight:600 ,fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp}<strike/></strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color:'#388e3c'}}>₹{item.price.discount}</Box>
                </Typography>    
                <Remove onClick={()=>removeItemFromCart(item.id)}>REMOVE</Remove> 
            
        </Box>
     </Component>
    )
}

export default CartItem;