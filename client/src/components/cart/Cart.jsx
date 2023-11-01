  
import { Grid,Typography,Box,styled, Button } from "@mui/material";
import {  useSelector } from "react-redux";


//components
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";


const Container =styled(Grid)(({theme})=>({

    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }

}));

const Header=styled(Box)`
padding:15px 24px;
background:#fff; 
`
const ButtonWrapper=styled(Box)`
padding:16px 22px;
  background:#fff;
  box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top:1px solid #f0f0f0;
`
const StyledBut=styled(Button)`
    margin-left: auto;
    display: flex;
    background:#fb641b;
    color:#fff;
    width: 250px;
    height:51px;
    border-radius:2px;

`
const LeftComponent=styled(Grid)(({theme})=>({
    marginLeft:'-15px',
    marginRight:'15px',
    [theme.breakpoints.down('md')]:{
        marginBottom:15
    }

}))


const Cart=()=>{        
    const cartDetails = useSelector(state => state.cart);
    const { cartItems } = cartDetails;
    // const {cartItems}= useSelector(state=>state.cart);
    return (
        <>
        {
            cartItems.length?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} sx={12}>
                        <Header>
                            <Typography>Cart Items({cartItems.length})</Typography>
                        </Header >

                        {
                            cartItems.map(item=>(
                                <CartItem item={item} />
                            ))
                        }
                        <ButtonWrapper>
                            <StyledBut>Place Order</StyledBut>
                        </ButtonWrapper>

                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} sx={12}>
                        <TotalView cartItems={cartItems}/>
                    </Grid>

                </Container>
                :
                <EmptyCart/>
        }
        </>      
    )
}

export default Cart;