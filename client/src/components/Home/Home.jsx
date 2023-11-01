import { useEffect } from "react";
//components
import Navbar from "./Navbar";
import Banner from "./Banner";
import Slide from "./slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";


import {styled,Box} from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import {useDispatch,useSelector} from 'react-redux'; 

const Compnent=styled(Box)`
 padding: 10px 10px;
 background: #f2f2f2;
//  margin-left: -49px;
 width: 107%;
`

const Home=()=>{
    
    const {products}= useSelector(state=>state.getProducts);
    console.log('Home')
    console.log(products);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])



    return(
        <>
            <Navbar/>
            <Compnent>
            <Banner/>
            {/* <midSlide products={products} title='deal of the day' timer={true} /> */}
            <MidSlide products={products} title='Deal of the day' timer={true}  />
            <MidSection/>
            <Slide products={products} title='Discounts for you' timer={false}  />
            <Slide products={products}  title='Suggesting items' timer={false}/>
            <Slide products={products} title='Top selection' timer={false} />
            <Slide products={products}  title='Recommended items' timer={false}/>
            <Slide products={products} title='Trending offers' timer={false} />
            <Slide products={products} title='Seasons top recommendation' timer={false} />
            <Slide products={products} title='Top deal on accessories' timer={false} />
            </Compnent>
        </>

    )
}

export default Home;