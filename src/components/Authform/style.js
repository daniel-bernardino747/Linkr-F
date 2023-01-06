import styled from 'styled-components'

export const ContainerForm = styled.div`
  display: flex;
  width: 100vw;
`
export const ContainerAuthForm = styled.form`
  width: 30%;
  height: 100vh;
  background-color: #333333;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const InputCamp = styled.input`
  width: 429px;
  height: 65px;
  background: #ffffff;
  border-radius: 6px;
  margin-top: 22px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #000000;
  ::placeholder{
    color: #9f9f9f;
  }
`
export const ButtonCamp = styled.input.attrs({ type: 'submit' })`
  width: 429px;
  height: 65px;
  margin-top: 22px;
  background: #1877f2;
  border-radius: 6px;
  font-family: 'Oswald', sans-serif;
  font-weight: 700;
  font-size: 27px;
  color: #FFFFFF;
`
export const TextError = styled.p`
  margin-top: 5px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  color: #FF0000;
`
export const Text = styled.p`
  margin-top:22px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  color: #FFFFFF;
  text-decoration-line: underline;
`
