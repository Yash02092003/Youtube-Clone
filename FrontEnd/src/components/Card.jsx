import axios from 'axios'
import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { format } from 'timeago.js'

const Container = styled.div`
    width: ${(props) => props.type !== 'sm' && '360px'};
    margin-bottom: ${(props) => props.type === 'sm' ? '10px' : '45px'};
    cursor: pointer;
    display: ${(props) => props.type === 'sm' && 'flex'};
    gap: 10px;
`

const Img = styled.img`
  width: 100%;
  height: ${(props) => props.type === 'sm' ? '120px' : '202px'};
  background-color: #999;
  flex: 1;
`

const Details = styled.div`
   display: flex;
   margin-top: ${(props) => props.type !== 'sm' && '16px'};
   gap: 12px;
   flex: 1;

`

const ChannelImage = styled.img`
    width: 36px;
    height: 36px;
    background-color: #999;
    border-radius: 50%;
    display: ${(props) => props.type === 'sm' && 'none'};
`
const Texts = styled.div`

`;

const Title = styled.h1`
    font-size: 16px;
    font-weight: 500;
    color: ${({theme}) => theme.text};
    `;

const ChannelName = styled.h2`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
    margin: 9px 0px;
    
    `;

const Info = styled.div`
    font-size: 14px;
    color: ${({theme}) => theme.textSoft};
                `;

function Card({type , video}) {
  const [user , setUser] = useState({});
  console.log(video);
  
  useEffect( () => {
    const fetchUser = async () => {
        const res = await axios.get(`http://localhost:8080/api/users/${video.userId}`);
        setUser(res.data);
    }

    fetchUser();
  } , [video.userId])
  return (
    <Link to={`/video/${video._id}`} style={{textDecoration : 'none'}}>
    <Container type={type}>
        <Img type={type} src={video.imgURL}/>
        <Details type={type}>
            <ChannelImage type={type} src={user.img}/>
            <Texts>
                <Title>{video.title}</Title>
                <ChannelName>{user.name}</ChannelName>
                <Info>{video.views} views {format(video.createdAt)}</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card