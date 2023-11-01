
import {imageURL} from "../../constants/data";
import { Grid,styled } from "@mui/material";

const Wrapper=styled(Grid)`
    margin-top:10px;
    justify-content:space-between;
    
`
const Image=styled('img')(({theme})=>({

    marginTop:10,
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    [theme.breakpoints.down('mid')]:{
        objectFit:'cover',
        height:130
    }
}))
    

const MidSection=()=>{
    const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

    return(
<>
        <Wrapper  lg ={12} sm={12} md={12} sx={12} container >
            {
                imageURL.map(image=>(
                    <Grid item  lg ={4} sm={12} md={4} sx={12}>

                    <img src={image} alt="imagesec"  style={{width:'100%'}}/>
                    </Grid>
                ))
            }
        </Wrapper>
        <Image src={url} alt="bannerImg" />
            </>
    )
}

export default MidSection;