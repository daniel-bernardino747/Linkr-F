import styled from 'styled-components'

export const ContTimeline = styled.div`
  display: flex;
  width: 611px;
  height: 276px;
  background-color: #000000;
  border-radius: 20px;
  margin-bottom: 25px;

  h1 {
    margin-top: 20px;
    font-size: 19px;
    color: #ffffff;
  }
`

export const ContIcons = styled.div`
  width: 80px;
  height: 50px;
  display: grid;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
`

export const Content = styled.div`
  height: 75px;
  h1 {
    font-size: 19px;
    margin-bottom: 0px;
  }
`

export const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 503px;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;

  div {
    margin: 8px auto;
  }

  h1 {
    width: 320px;
    font-size: 16px;
    color: #cecece;
    margin-bottom: 10px;
  }

  h2 {
    width: 320px;
    font-size: 11px;
    color: #9b9595;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 11px;
    color: #cecece;
  }

  img {
    height: 153px;
    width: 153px;
  }
`
