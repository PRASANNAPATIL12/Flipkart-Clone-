import { Box,Button ,styled} from "@mui/material"; 
import { useState } from "react";

import {ShoppingCart as Cart,FlashOn as Flash} from '@mui/icons-material';
// import {} from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
// import { payUsingPaytm } from "../../service/api";
// import {post} from "../../utils/paytm";

const LeftContainer=styled(Box)(({theme})=>({
minWidth:'40%',
padding:'40px 0 0 30px',
[theme.breakpoints.down('lg')]:{
    padding:'20px 0 0 10px'
}
}))


const Image = styled('img')({
    padding:'15px', 
    width:282,

   
});

const StyledButton=styled(Button)(({theme})=>({
width:'48%',
height:'40px',
borderRadis:'2px',
[theme.breakpoints.down('lg')]:{
    
}

}))


const CartComponent=styled(Cart)`
width:33px;
`

export const ActionItem =({product })=>{
    
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [quantity, setQuantity] = useState(1);

    const {id}=product;
    
    const addItemToCart=()=>{
        dispatch(addToCart(id,quantity));
            navigate('/cart');
    }

    // const buyNow = async () => {
    //     let response = await payUsingPaytm({ amount: 500, email: 'codeforinterview01@gmail.com'});
    //     let information = {
    //         action: 'https://securegw-stage.paytm.in/order/process',
    //         params: response    
    //     }
    //     post(information);
    // }

    return(
        <LeftContainer>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}} >

            <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant="contained" style={{background:'#ff9f00',marginRight:10 }} onClick={()=>addItemToCart()} ><CartComponent/>Add to cart</StyledButton>
            <StyledButton variant="contained"  style={{background:'#fb541b'}}><Flash/>Buy Now</StyledButton>

        </LeftContainer>
    )
}

