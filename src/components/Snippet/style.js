import styled from 'styled-components'

export const ContPost = styled.div`
  width: 611px;
  margin-bottom: 25px;
`

export const ContTimeline = styled.div`
  display: flex;
  width: 100%;
  height: 276px;
  background-color: #000000;
  border-radius: 20px;

  position: relative;
  h1 {
    margin-top: 20px;
    font-size: 19px;
    color: #ffffff;
  }

  @media (max-width: 1024px) {
    width: 55vw;
    height: 30vh;
  }

  @media (max-width: 860px) {
    border-radius: 0;
    width: 100vw;
    height: 240px;
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

  @media (max-width: 1024px) {
    margin-left: 7px;
    margin-right: 7px;
  }
`

export const Content = styled.div`
  h1 {
    font-size: 19px;
    height: 100%;
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
    margin-left: 10px;
    width: 300px;
  }

  h1 {
    width: 250px;
    font-size: 16px;
    color: #cecece;
    margin-bottom: 10px;
    margin-right: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 11px;
    color: #9b9595;
    margin-bottom: 10px;
    width: 250px;
  }

  h3 {
    font-size: 11px;
    color: #cecece;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    height: 153px;
    width: 153px;
    border-left: 1px solid #4d4d4d;
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    width: 45vw;
    height: 140px;

    div {
      width: 250px;
    }

    img {
      width: 140px;
      height: 140px;
    }
  }

  @media (max-width: 860px) {
    width: 80vw;
    height: 120px;

    div {
      width: 450px;
    }

    img {
      width: 120px;
      height: 120px;
    }
  }

  @media (max-width: 550px) {
    h1,
    div {
      width: 150px;
    }

    h2 {
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`
export const IconsEditDelete = styled.div`
  display: flex;
  width: 100px;
  align-items: center;
  justify-content: space-around;

  position: absolute;
  top: 1.5rem;
  right: 0.5rem;

  svg {
    font-size: 1.2em;
    cursor: pointer;
  }
`
export const ContainerComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 611px;
  background-color: #1e1e1e;
  border-radius: 20px;
`
export const ListComments = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  gap: calc(20px);
`
