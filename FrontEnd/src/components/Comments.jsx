import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``


const NewComment = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;

`;


const Input = styled.input`
   border: none;
   outline: none;
   border-bottom: 1px solid ${({theme}) => theme.soft};
   padding: 5px;
   width: 100%;
   background-color: transparent;
   color: ${({theme}) => theme.text};
   `;




function Comments() {
  return (
    <Container>
        <NewComment>
            <Avatar src='https://marketplace.canva.com/EAFcyEtxbGA/1/0/1600w/canva-black-and-red-modern-gaming-youtube-channel-logo-onRlchjOY2w.jpg'/>
            <Input placeholder='Add a Comment..'/>
        </NewComment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments