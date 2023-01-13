import styled from 'styled-components'

export const ContainerFormComment = styled.form`
  width: 95%;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 10px;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  input {
    width: 90%;
    border-radius: 6px;
    border: none;
    padding: 0 10px;
    background-color: #252525;
    color: #575757;
  }

  button {
    background: none;
    border: none;
    position: absolute;
    right: 10px;
    bottom: 8px;
    cursor: pointer;
    svg {
      width: 20px;
      height: 20px;
      color: #f3f3f3;
    }
  }
`
