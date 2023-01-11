import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 30em;
  height: 2.4em;
`
export const Input = styled.input`
  z-index: 2;
  width: 100%;
  height: 100%;
  padding: 1em;
  border: none;
  border-radius: 1em;
  outline: none;
  cursor: pointer;
  background: white;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    cursor: text;
  }
`
export const ModalSearch = styled.div`
  display: ${(props) => (props.open ? 'flex' : 'none')};
  z-index: 1;
  position: absolute;
  top: 1em;
  right: 0;
  left: 0;
  flex-direction: column;
  max-height: 14em;
  border-radius: 0 0 1em 1em;
  overflow-y: hidden;
  background-color: gray;
  a {
    text-decoration: none;
  }
`
export const Scroll = styled.div`
  padding: 1.7em 1em 0.7em 1em;
  overflow: auto;
  gap: 0.5em;
  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border: 3px solid gray;
    border-radius: 20px;
    background-color: #333333;
  }
`

export const ItemUser = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.0625em;
  border-radius: 2em;
  gap: 0.5em;
  &:hover {
    cursor: ${(props) => (props.notFound ? 'pointer' : 'initial')};
    background-color: ${(props) => (props.notFound ? '#8e8e8e' : 'none')};
  }
`
export const ImageUser = styled.img`
  width: 10px;
  height: 10px;
  border: 0.0625em solid #333333;
  border-radius: 1em;
`
export const NameUser = styled.p`
  color: black;
  font-weight: 500;
  font-size: 1.2em;
`
export const FollowingUser = styled.span`
  color: #0009;
`
