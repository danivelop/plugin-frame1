import React, { useState, useCallback, useEffect } from 'react'
import isMobile from 'ismobilejs'
import ChannelService from './ChannelService'
import * as Styled from './App.styled'

const FRAME_URL = 'http://192.168.0.158:3001'

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

  useEffect(() => {
    ChannelService.boot({
      pluginKey: '5c1148b1-7714-4333-8bb5-6dfea1172dc7',
    })
  }, [])

  return (
    <Styled.Container>
      <Styled.NewTabButton href={`${FRAME_URL}/bodyscroll`} target="_blank">new tab 버튼</Styled.NewTabButton>
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
