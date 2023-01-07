import styled from 'styled-components'

export const ContHeader = styled.div`
  width: 100vw;
  height: 72px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 17px;
  position: relative;

  h1 {
    font-family: 'Passion One', cursive;
    font-size: 49px;
    font-weight: 700;
  }

  img{
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
  position: absolute;
  top: 72px; 
  right: 0;
  width: 120px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  border-radius: 0px 0px 0px 20px;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #FFFFFF;
`
