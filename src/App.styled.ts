import styled, { css } from 'styled-components'

interface PluginContainerProps {
  show: boolean
  isMobile: boolean
}

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 140vh;
  background-color: #D4D4D4;
`

export const NewTabButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: env(safe-area-inset-bottom, 0);
  left: 24px;
  width: 64px;
  height: 64px;
  word-break: keep-all;
  text-align: center;
  font-size: 12px;
  font-weight: bolder;
  text-decoration: none;
  color: white;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`

export const FixedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: env(safe-area-inset-bottom, 0);
  right: 24px;
  width: 64px;
  height: 64px;
  word-break: keep-all;
  text-align: center;
  font-size: 12px;
  font-weight: bolder;
  color: white;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
`
export const PluginContainer = styled.div<PluginContainerProps>`
  position: relative;
  width: 360px;
  height: 640px;

  ${({ isMobile }) => isMobile && css`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100vh;
  `}
`

export const Plugin = styled.iframe`
  width: 100%;
  height: 100vh;
  border: 0;
`

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`
