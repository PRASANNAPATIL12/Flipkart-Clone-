import { Typography ,Box,Table,TableBody,TableRow,TableCell } from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';
import styled from "@emotion/styled";




const SmallText=styled(Box)`
font-size:14px;
vertical-align:vertical;
& >td{
    font-size:14px;
    margin-top:10px;


}

`

const StyledBadge=styled(Badge)`
margin-right:10px;
color:#00cc00;
font-size:15px;

`;

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:vertical;

& >td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`

const ProductDetail=({product})=>{
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date=new Date(new Date().getTime()+(5*24*60*60*1000));

    return(
     <>
        <Typography>{product.title.longTitle}</Typography>
                        <Typography style={{marginTop:5,color:'#878787', fontSize:14}} >
                            8 Ratings & 1 review
                            <Box component='span'><img src={fassured}  style={{width:77,marginLeft:20}} /></Box>

                            </Typography>
                            <Typography>
                                <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                                <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}<strike/></strike></Box>&nbsp;&nbsp;&nbsp;
                                <Box component='span' style={{color:'#388e3c'}}>₹{product.price.discount}</Box>
                            </Typography>
                            <Typography>Available Offers</Typography>
                            <SmallText>
                            <Typography><StyledBadge />Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit Card</Typography>
                            <Typography><StyledBadge />Bank Offer 10% Off on Bank of Baroda Mastercard debit card first time transaction</Typography>
                            <Typography><StyledBadge />Purchase this Furniture or Appliance and Get Extra ₹500 Off on Select ACs</Typography>
                            <Typography><StyledBadge />Partner OfferExtra 10% off upto ₹500 on next furniture purchase</Typography>
                            <Typography><StyledBadge />5% Cashback on Axis Bank Card</Typography>
                            <Typography><StyledBadge />No Cost EMI on Bajaj Finserv EMI cart on value above ₹2999 t&c</Typography>
                            </SmallText>
                            <Table>
                                <TableBody>
                                    <ColumnText>
                                        <TableCell style={{color:'#878787',marginTop:10}}>Delivery</TableCell>
                                        <TableCell style={{fontWeight:600}}>Delivery by {date.toDateString()} | ₹40</TableCell>
                                    </ColumnText>
                                
                                    <ColumnText>
                                        <TableCell style={{color:'#878787'}}>Warrenty</TableCell>
                                        <TableCell style={{fontWeight:600}}>No Warrenty</TableCell>
                                    </ColumnText>
                                     <ColumnText>
                                        <TableCell style={{color:'#878787' ,padding:' 0px 0px 47px 15px' }}>Seller</TableCell>
                                        <TableCell >
                                            <Box style={{color:'#2874f0'}} component="span" >SuperComNet</Box>
                                     <Typography>GST invoice available</Typography>
                                    <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                                        </TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell colSpan={2}>
                                            <img src={adURL} alt="flipKartPoints" style={{width:390 }}/>
                                        </TableCell>
                                    </ColumnText>
                                    <ColumnText>
                                        <TableCell style={{color:'#878787',    padding:' 0px 0px 41px 0px'}}>Description</TableCell>
                                        <TableCell >{product.description}</TableCell>
                                    </ColumnText>
                                </TableBody>
                            </Table>
    </>
    )
}


export default ProductDetail;