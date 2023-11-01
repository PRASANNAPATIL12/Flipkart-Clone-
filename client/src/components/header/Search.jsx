import { InputBase,styled,Box,List,ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState ,useEffect} from "react";
import {Link} from "react-router-dom";

import {useSelector,useDispatch} from 'react-redux';
import {getProducts} from "../../redux/actions/productActions"

const SearchContainer=styled(Box)`
background:#fff;
margin-left:23px;
width:38%;
border-radius:2px;
display:flex;


`;

const InputSearchBase=styled(InputBase)`
padding-left:20px;
width:100%;     
font-size:unset;

`;

const SearchIconWrapper=styled(Box)`
color:blue;
padding:2px;
margin: 2px 4px -9px 2px;  
`;

const ListWrapper=styled(List)`
position:absolute;
background:#ffffff;
color:#000;
margin-top:36px;

`


const Search=()=>{

  const [text, settext] = useState('');
  const {products}=useSelector(state=>state.getProducts);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const getText=(text)=>{
    settext(text);

  }
    return(  
        <SearchContainer>

      <InputSearchBase        
        placeholder="Search for products,Brands and More "
        onChange={(e)=>getText(e.target.value)}
        value={text}
          />
          <SearchIconWrapper>
            <SearchIcon/> 
          </SearchIconWrapper>
          {
            text &&
            <ListWrapper>
              {
                products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
                  <ListItem>
                      <Link
                      to={`/product/${product.id}`}
                      onClick={()=>settext('')}
                      style={{textDecoration:'none',color:'inherit'}}
                      >
                      
                    {product.title.longTitle}
                      </Link>
                  </ListItem>
                ))
              }
            </ListWrapper>
          }
        </SearchContainer>

    )
}

export default Search;