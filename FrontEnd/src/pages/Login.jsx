import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../redux/userSlice';
import { store } from '../redux/store';


const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 56px);
    color: ${({theme}) => theme.text};
    flex-direction: column;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.bgLighter};
    flex-direction: column;
    padding: 20px 50px;
    border: 1px solid ${({theme}) => theme.soft};
    gap: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    
`

const SubTitle = styled.h2`
    font-size: 20px;
    font-weight: 300;
`

const Input = styled.input`
    border: 1px solid ${({theme}) => theme.soft};
    border-radius: 3px;
    padding: 10px;
    background-color: transparent;
    width: 100%;
    color: ${({theme}) => theme.text};
`
const Button = styled.button`
    border-radius: 3px;
    border: none;
    padding: 10px 20px;
    font-weight: 500;
    cursor: pointer;
    background-color: ${({theme}) => theme.soft};
    color: ${({theme}) => theme.textSoft};
`

const More = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 12px;
    color: ${({theme}) => theme.textSoft};
`

const Links = styled.div`
    margin-left: 50px;
`

const Link = styled.span`
    margin-left: 30px;
`

function Login() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const dispatch = useDispatch()

    const HandleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginStart())
        try{
            const res = await axios.post("http://localhost:8080/api/signin" , {name , password});
            dispatch(loginSuccess(res.data))
            console.log(res.data);
        }
        catch(err){
            console.log(err);
            dispatch(loginFailure());
        }
    }
    console.log(store.subscribe.user)

  return (
    <Container>
        <Wrapper>
            <Title>Signin</Title>
            <SubTitle>To continue to Youtube</SubTitle>
            <Input placeholder='username' onChange={(e) => setName(e.target.value)}/>
            <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <Button onClick={HandleLogin}>Sign In</Button>
            <Title>Or</Title>
            <Input placeholder='username' onChange={(e) => setName(e.target.value)}/>
            <Input placeholder='email' onChange={(e) => setEmail(e.target.value)}/>
            <Input placeholder='password' type='password' onChange={(e) => setPassword(e.target.value)}/>
            <Button>Sign Up</Button>
        </Wrapper>
        <More>
            English(USA)
            <Links>
               <Link>Help</Link>
               <Link>Privacy</Link>
               <Link>Terms</Link>
            </Links>
        </More>
    </Container>
  )
}

export default Login