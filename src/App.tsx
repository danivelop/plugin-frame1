import React, { useState, useCallback } from 'react'
import isMobile from 'ismobilejs'
import * as Styled from './App.styled'

const FRAME_URL = 'http://192.168.0.3:3001'

function App() {
  const [showAllFixed, setShowAllFixed] = useState(false)

  const handleShowAllFixed = useCallback(() => {
    setShowAllFixed(true)
    document.body.classList.add('nonScrollable')
  }, [])

  const handleHideAllFixed = useCallback(() => {
    setShowAllFixed(false)
    document.body.classList.remove('nonScrollable')
  }, [])

  return (
    <Styled.Container>
      <Styled.NewTabButton href={`${FRAME_URL}/newtab`} target="_blank">new tab 버튼</Styled.NewTabButton>
      <Styled.FixedButton onClick={handleShowAllFixed}>fixed 버튼</Styled.FixedButton>
      {showAllFixed && (
        <Styled.PluginContainer
          show={showAllFixed}
          isMobile={isMobile().phone}
        >
          <Styled.Close onClick={handleHideAllFixed}>닫기</Styled.Close>
          <Styled.Plugin id="plugin-iframe" src={`${FRAME_URL}/all`}></Styled.Plugin>
        </Styled.PluginContainer>
      )}
    </Styled.Container>
  )
}

export default App
