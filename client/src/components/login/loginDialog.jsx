import { Dialog,Box,TextField,Typography,Button,styled } from "@mui/material";
import { useState ,useContext } from "react";
import { authenticateSignup ,authenticateLogin } from "../../service/api.js";

import { DataContext } from "../../context/DataProvider.jsx";

const Component=styled(Box)`
height:70vh;
width:90vh;
`
const Image=styled(Box)`
background: #2874f0 url( https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) no-repeat center 85%;
height:79%;
width:25%;
padding:45px 35px;
&>p,&>h5{
    font-weight:600;
    color:#ffffff;
}

`

const Wrapper=styled(Box)`
display:flex;
flex-direction:column;
padding:18px 35px;
flex:1;
&>div,&>Button, &>p{
    margin-top:20px;
}

`
const LoginButton=styled(Button)`
text-transform:none;
background:#fb641b;
color:#ffff;
height:48px;
border-radius:2px;

`;

const RequestOTP=styled(Button)`
text-transform:none;
background:#ffff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 29%);

`;

const Text=styled(Typography)`
font-size:14px;
color:#878787;
`
const CreateAc=styled(Typography)`
font-size:12px;
text-align: center;
color:#2874f0;
font-weight:600;
cursor:pointer;


`;

const Error=styled(Typography)`
font-size:10px;
color:#FF6161;
line-height:0;
margin-top:10px;
font-weight:600;
`

const accountInitialValue={
    login:{
        view:'login',
        heading:'Login',
        subHeading:'Get access to your Orders, Wishlist and Recommendations'
    },
    signUp:{
        view:'signUp',
        heading:"Looks like you're new here!",
        subHeading:'Sign up with your mobile number to get started'
    }
}

const signupInitialValue={
    firstname:'',
    lastname:'',
    email:'',
    username:'',
    password:'',
    phone:'',
}

const loginInitialValues={
    username:'',
    password:''
}

const LoginDialog=({open,setOpen})=>{

    const [account,toggleAccount]=useState(accountInitialValue.login);
    const [signup,setSignup]=useState(signupInitialValue);

    //datacontext values imported from datacontex
    const {acc,setAcc}=useContext(DataContext);

    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialValue.login);
        setError(false);    
    }

    const ToggleSignUp=()=>{
        toggleAccount(accountInitialValue.signUp);
    }

    const onInputChangr=(e)=>{
        setSignup({...signup,[e.target.name]:e.target.value});
    }

    const signupUser=async()=>{
        let response=await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAcc(signup.firstname);
        
    }

    const onValueChange=(e)=>{
        setLogin({...login, [e.target.name]:e.target.value});
    }

    const loginUser=async()=>{
        let response=await authenticateLogin(login);
        console.log(response);
        if(response.status ===200){
            handleClose();
            console.log(response);

            setAcc(response.data.data.firstname);
        }else{
            setError(true);

        }
        

    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx:{maxWidth:'unset'}}}>
            <Component>
            <Box fontStyle={{display:'flex' ,height:'100%' }} >
                <Image>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop:20}} >{account.subHeading}</Typography>
                </Image>
            {   account.view==='login'?
                <Wrapper>
                    <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="username" label="Enter username" />
                   {error &&  <Error>please enter valid username or password</Error>}
                    <TextField variant="standard" onChange={(e)=>onValueChange(e)} name="password" label="Enter Password" />
                  <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                    <LoginButton onClick={()=>loginUser()}>Login</LoginButton>  
                    <Typography style={{textAlign:'center'}}>OR</Typography>
                    <RequestOTP>request OTP</RequestOTP >
                    <CreateAc onClick={()=>ToggleSignUp()}>New to Flipkart?Create an account</CreateAc >
                </Wrapper>

                :
                <Wrapper style={{marginTop:-33}}>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="firstname" label="Enter Firstname"/>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="lastname"   label="Enter Lastname"/>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="email"   label="Enter Email"/>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="username"   label="Enter Username"/>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="password"   label="Enter Password"/>
                    <TextField variant="standard" onChange={(e)=>onInputChangr(e)} name="phone"   label="Enter Phone"/>
                    <LoginButton onClick={()=>signupUser()} >Continue</LoginButton >
                </Wrapper>
            }    
                </Box>  
            </Component>
        </Dialog>
    )
}


export default LoginDialog;