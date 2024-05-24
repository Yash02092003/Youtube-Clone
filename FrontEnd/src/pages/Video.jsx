import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Comments from '../components/Comments';
import Card from '../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { fetchSuccess } from '../redux/videoSlice';
import { format } from 'timeago.js';
const Container = styled.div`
  display: flex;
  gap: 24px;

`

const Content = styled.div`
  flex: 5;
      
      `

const VideoWrapper = styled.div`
  
`

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color : ${({theme}) => theme.text};
`

const Details = styled.div`
  display  : flex;
  align-items: center;
  justify-content: space-between;

`


const Info = styled.span`
  color: ${({theme}) => theme.textSoft};
`

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({theme}) => theme.text};
`

const Button = styled.button`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    background: transparent;
    border: none;
    outline: none;
`

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft};


`


const Recommendation = styled.div`
  flex: 2;
`

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`

const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
 `

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color : ${({theme}) => theme.text};
  
`

const ChannelName = styled.span`
    font-weight: 500;
    `


const ChannelCounter = styled.span`
    margin-top: 5px;
    margin-bottom: 20px;
    color: ${({theme}) => theme.textSoft};
    font-size: 12px;
`


const Description = styled.p`
font-size: 14px;`

const Subscribe = styled.div`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`


function Video() {
  const { user } = useSelector(state => state.user);
  const { currentVideo } = useSelector(state => state.video); 
  
  const dispatch = useDispatch();
  
  const path = useLocation().pathname.split("/")[2];


  const [channel , setChannel] = useState({});

  useEffect( () => {
    const fetchData = async () => {
      try{
        const videoRes = await axios.get(`http://localhost:8080/api/video/664f696eb14ba252cd10ff66`)
        const channelRes = await axios.get(`/users/${videoRes.data.userId}`);
        
        dispatch(fetchSuccess(videoRes.data));
        setChannel(channelRes.data);
      }
      catch(e){
        console.log(e);
      }
    }

    fetchData()
  } , [path , dispatch])

  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height='600px' src="https://www.youtube.com/embed/yIaXoop8gl4?si=GnuWeHf6YATSJ9Rb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>{currentVideo?.title}</Title>
        <Details>
          <Info>{currentVideo.views} views ,  Posted   {format(currentVideo.createdAt)}</Info>
          <Buttons>
            <Button><ThumbUpIcon/> {currentVideo.likes?.length}</Button>
            <Button><ThumbDownIcon/> Dislike</Button>
            <Button><ShareIcon></ShareIcon></Button>
            <Button><BookmarkIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
       <Channel>
        <ChannelInfo>
          <Image src={channel.img}/>
          <ChannelDetail>
            <ChannelName>{channel.name}</ChannelName>
            <ChannelCounter>{channel.subscribers} Subscribers</ChannelCounter>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, neque.
            </Description>
          </ChannelDetail>
        </ChannelInfo>
        <Subscribe>Subscribe</Subscribe>
      </Channel>
      <Hr/>
      <Comments/>
      </Content>
     


      {/* <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation> */}


    </Container>
  )
}

export default Video