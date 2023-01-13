import styled from 'styled-components'

export const ContTimeline = styled.li`
  display: flex;
  width: 100%;
  max-width: 610px;
  height: 276px;
  background-color: rgba(0, 0, 0, 1);
  border-radius: 1em;
  position: relative;
  padding: 0 1em 1em 0.5em;
  margin-bottom: 1em;
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
  display: grid;
  justify-content: center;
  width: 80px;
  height: 50px;
  margin: 1em 1em 1em 0.5em;

  img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }

  @media (max-width: 1024px) {
    margin: 1em 0.5em 0.5em 0.25em;
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
  width: 100%;
  max-width: 500px;
  height: 10em;
  border: 1px solid rgba(77, 77, 77, 1);
  border-radius: 0.5em;
  cursor: pointer;

  div {
    padding: 0.5em 1em;
    width: calc(100% - 12em);
  }

  h1 {
    color: rgba(206, 206, 206, 1);
    margin-bottom: 0.5em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h2 {
    font-size: 0.65em;
    color: rgba(155, 149, 149, 1);
    margin-bottom: 1em;
    width: 100%;
  }

  h3 {
    font-size: 0.8em;
    color: rgba(206, 206, 206, 1);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    height: 100%;
    width: auto;
    border-left: 0.0625em solid #4d4d4d;
    border-radius: 0.5em;
  }

  @media (max-width: 1024px) {
    width: 45vw;
    height: 120px;
  }

  @media (max-width: 860px) {
    width: 85vw;
  }

  @media (max-width: 550px) {
    width: 75vw;

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
  right: 1.5rem;

  svg {
    cursor: pointer;
  }
`
