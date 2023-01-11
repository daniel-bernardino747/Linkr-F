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
  position: absolute;
  top: 1em;
  right: 0;
  left: 0;
  flex-direction: column;
  padding: 1.7em 1em 0.7em 1em;
  border-radius: 0 0 1em 1em;
  background-color: gray;
  gap: 0.5em;

  a {
    text-decoration: none;
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
    background-color: ${(props) => (props.notFound ? '#8e8e8e' : 'none')};
    cursor: ${(props) => (props.notFound ? 'pointer' : 'initial')};
  }
`
export const ImageUser = styled.img`
  width: 10px;
  height: 10px;
  border: 0.0625em solid #333333;
  border-radius: 1em;
`
export const NameUser = styled.p`
  font-size: 1.2em;
  color: black;
  font-weight: 500;
`
