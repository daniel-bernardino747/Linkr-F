import styled from 'styled-components'

export const ContainerMensage = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 15%;
  @media(max-width: 860px){
    width: 100%;
    height: 175px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0;
  };
`

export const Title = styled.div`
  font-family: 'Passion One', cursive;
  font-style: normal;
  font-weight: 700;
  font-size: 106px;
  @media(max-width: 860px){
    font-size: 76px;
  };
`

export const Description = styled.div`
  font-family: 'Oswald', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  @media(max-width: 860px){
    font-size: 23px;
    box-sizing:border-box;
    padding-left: 60px;
    padding-right: 60px;
  };
`
