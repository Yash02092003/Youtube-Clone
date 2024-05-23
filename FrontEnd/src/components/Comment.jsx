import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    gap: 10px;
    margin: 20px 10px;
`

const Avatar = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50%;
`

const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${({theme}) => theme.text};
`

const Name = styled.span`
    font-size: 13px;
    font-weight: 500;
`

const Date = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({theme}) => theme.textSoft};
    margin-left: 5px;
`

const Text = styled.span`
    font-size: 14px;
`



function Comment() {
  return (
    <Container>
        <Avatar src='https://marketplace.canva.com/EAFcyEtxbGA/1/0/1600w/canva-black-and-red-modern-gaming-youtube-channel-logo-onRlchjOY2w.jpg'/>
        <Details>
            <Name>Dragon Slayer <Date>20 July , 2022</Date></Name>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, unde.</Text>
        </Details>
    </Container>
  )
}

export default Comment