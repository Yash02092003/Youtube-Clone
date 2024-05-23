import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import Comments from '../components/Comments';
import Card from '../components/Card';
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
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe width="100%" height='600px' src="https://www.youtube.com/embed/yIaXoop8gl4?si=GnuWeHf6YATSJ9Rb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </VideoWrapper>
        <Title>Dragon Video</Title>
        <Details>
          <Info>7,948,154 views Jun 22 , 2022</Info>
          <Buttons>
            <Button><ThumbUpIcon/> 123</Button>
            <Button><ThumbDownIcon/> Dislike</Button>
            <Button><ShareIcon></ShareIcon></Button>
            <Button><BookmarkIcon/>Save</Button>
          </Buttons>
        </Details>
        <Hr/>
       <Channel>
        <ChannelInfo>
          <Image src='https://marketplace.canva.com/EAFcyEtxbGA/1/0/1600w/canva-black-and-red-modern-gaming-youtube-channel-logo-onRlchjOY2w.jpg'/>
          <ChannelDetail>
            <ChannelName>Dragon Slayer</ChannelName>
            <ChannelCounter>200k Subscribers</ChannelCounter>
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
     


      <Recommendation>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
        <Card type='sm'/>
      </Recommendation>


    </Container>
  )
}

export default Video