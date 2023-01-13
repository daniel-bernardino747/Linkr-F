import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5em 0;
`
export const Title = styled.h1`
  font-size: 2em;
`
export const Content = styled.div`
  display: flex;
  gap: 1em;
`
export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1em;

  @media (max-width: 1024px) {
    width: 55vw;
    font-size: 1.5em;
  }
`
export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImageUser = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 26.5px;
`
export const Unfollow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 31px;
  background-color: #ffffff;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  color: #1877f2;
  font-weight: 700;
  font-size: 14px;
`
export const Follow = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 31px;
  background-color: #1877f2;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  color: #ffffff;
  font-weight: 700;
  font-size: 14px;
`
