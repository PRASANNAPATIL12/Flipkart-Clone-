
import Carousel from "react-multi-carousel"
import { Box,Typography,Button,Divider ,styled} from "@mui/material";
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from "react-router-dom";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Component =styled(Box)`
margin-top:10px;
background:#ffffff;

`
const Deal=styled(Box)`
padding:12px 14px;
display:flex;


`

const Timer=styled(Box)`
 display:flex;
 margin-left:10px;
 align-item:center;
 color: #7f7f7f;

`

const DealText=styled(Typography)`
font-size:22px;
font-weight:600;
margin-right:25px;
line-height:32px;
`
const ViewAllButton=styled(Button)`
margin-left:auto;
background-color:#2874f0;
border-radius:2px;
font-weight:600;
font-size:13px;

`

const Image=styled("img")`
width:'auto';
height:150px;

`
const Text=styled(Typography)`
font-size:14px;
margin-top:5px;


`


const Slide=({products,title,timer})=>{
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

    const renderer = ({ hours, minutes, seconds }) => {
       return <Box variant="span">{hours}:{minutes}:{seconds}Left</Box>
      };
      

    return(
        <Component>
            <Deal>
                <DealText>{title}</DealText>
                {
                  timer && 
                  <Timer>
                  <img src={timerURL} alt="clockLogo" style={{width:24}} />
                  <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                  </Timer>
                }
                < ViewAllButton variant="contained" color="primary">view All</ViewAllButton>
                

            </Deal>
            <Divider/>

         <Carousel
         responsive={responsive}
         swipeable={false}
         draggable={false}
         containerClass="carousel-container"
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px" 
         infinite={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         >{
           products &&  products.map(temp=>(
              <Link to={`product/${temp.id}`} style={{textDecoration:'none'}}  >
             <Box textAlign="center" style={{padding:'25px 15px'}}> 
              <Image src={temp.url} alt="productImg" />
              <Typography style={{fontWeight:600}} >{temp.title.shortTitle}</Typography>
              <Typography style={{color:'green'}}>{temp.discount}</Typography>
              <Typography style={{color:'#212121', opacity:'0.6'}}>{temp.tagline}</Typography>
             </Box>
              </Link>
            ))
         }
         

         </Carousel>
         </Component>
    )
}

export default Slide;