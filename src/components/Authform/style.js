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
  margin-bottom: 13px;
`
export const ButtonCamp = styled.input.attrs({ type: 'submit' })`
  width: 429px;
  height: 65px;
  background: #1877f2;
  border-radius: 6px;
`
