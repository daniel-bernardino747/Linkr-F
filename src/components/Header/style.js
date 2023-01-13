import styled from 'styled-components'

export const ContHeader = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100vw;
  height: 72px;
  padding: 17px;
  background-color: #000000;

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    font-weight: 700;
    font-size: 49px;
    font-family: 'Passion One', cursive;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;
  }
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
`
export const Opitions = styled.div`
  display: flex;
  z-index: 2;
  position: absolute;
  top: 72px;
  right: 0;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 47px;
  border-radius: 0px 0px 0px 20px;
  color: #ffffff;
  font-weight: 700;
  font-size: 17px;
  font-family: 'Lato', sans-serif;
  background-color: #000000;
`
