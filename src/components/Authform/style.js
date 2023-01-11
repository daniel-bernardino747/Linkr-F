import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`
export const ContainerAuthForm = styled.form`
  width: 30%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 860px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
  }
`
export const InputCamp = styled.input`
  width: 85%;
  height: 65px;
  background: #ffffff;
  border-radius: 6px;
  margin-top: 22px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #000000;
  ::placeholder {
    color: #9f9f9f;
  }
  @media (max-width: 860px) {
    width: 85%;
    font-size: 22px;
  }
`
export const ButtonCamp = styled.input.attrs({ type: 'submit' })`
  width: 85%;
  height: 65px;
  margin-top: 22px;
  background: #1877f2;
  border-radius: 6px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #ffffff;
  @media (max-width: 860px) {
    width: 85%;
    font-size: 22px;
  }
`
export const TextError = styled.p`
  margin-top: 5px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: #ff0000;
`
export const Text = styled.p`
  margin-top: 22px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #ffffff;
  text-decoration-line: underline;
`
