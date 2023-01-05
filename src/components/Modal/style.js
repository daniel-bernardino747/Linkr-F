import styled from 'styled-components'

export const Overlay = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5em;
  font-weight: 700;
  margin: 0 4em 0 4em;
`

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(90%, 50em);
  height: 25em;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 7em;
  gap: calc(1.5em);
  div {
    width: 50%;
    display: flex;
    justify-content: space-around;
  }
`

export const ButtonExit = styled.button`
  width: 40%;
  height: 2em;
  border: none;
  color: #1877f2;
  font-size: 1.5em;
  font-weight: 700;
  background: white;
  border-radius: 0.4em;
  cursor: pointer;
`

export const ButtonDelete = styled.button`
  width: 40%;
  height: 2em;
  border: none;
  color: white;
  font-size: 1.5em;
  font-weight: 700;
  background: #1877f2;
  border-radius: 0.4em;
  cursor: pointer;
`
