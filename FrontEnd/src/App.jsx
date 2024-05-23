import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import { darkTheme, lightTheme } from './utils/Theme'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Video from './pages/Video'
import Login from './pages/Login'

const Container = styled.div`
    display: flex;
`

const Main = styled.div`
    flex: 7;
    background-color: ${({theme}) => theme.bgLighter};
    color: ${({theme}) => theme.text};
`

const Wrapper = styled.div`
  padding: 22px 96px;
`

function App() {

  const [darkMode , setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
      <Menu darkMode = {darkMode} setDarkMode = {setDarkMode}/>
      <Main>
        <NavBar/>
        <Wrapper>
          <Routes>
            <Route path='/'>
              <Route index element={<Home/>}/>
              <Route path='signin' element={<Login/>}/>
              <Route path='video'>
                <Route path=':id' element={<Video/>}/>
              </Route>
            </Route>
          </Routes>
        </Wrapper>
      </Main>
    </Container>
    </ThemeProvider>
  )
}

export default App