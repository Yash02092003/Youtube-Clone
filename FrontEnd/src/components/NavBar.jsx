import React from 'react'
import styled from 'styled-components'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';

const Container = styled.div`
    position: sticky;
    top: 0;
    background-color: ${({theme}) => theme.bg};
    height: 56px;
`

const Wrapper = styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
height: 100%;
padding: 0px 20px;
position: relative;
`

const Search = styled.div`
width: 50%;
position: absolute;
left: 0;
right: 0;
margin: auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
border: 1px solid #ccc;
border-radius: 5px;
    
`

const Input = styled.input`
   background-color: transparent;
   border: none;
   outline: none;
   width: 100%;

`

const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const User = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
`

const Avatar = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`

function NavBar() {

  const user = useSelector(state => state.user.user);
  return (
    <Container>
        <Wrapper>
            <Search>
                <Input placeholder='Search'/>
                <SearchIcon/>
            </Search>
           {user ? 
           <User>
                <VideoCallIcon/>
                <Avatar src={user.img}/>
                {user.name}
           </User>
           
           :  <Link to='signin' style={{textDecoration : 'none' , color : 'inherit'}}>
            <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
            </Button>
            </Link>}
        </Wrapper>
    </Container>
  )
}

export default NavBar