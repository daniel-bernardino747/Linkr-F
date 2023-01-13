import styled from 'styled-components'

export const Publish = styled.div`
  display: flex;
  width: 100%;
  max-width: 611px;
  height: 209px;
  margin-bottom: 35px;
  border-radius: 1em;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0em 0.25em 0.25em rgba(0, 0, 0, 0.25);
  padding: 0.5em;
  img {
    margin: 0.7em 0.7em 0.7em 0.7em;
    width: 50px;
    height: 50px;
    border-radius: 3em;
  }

  @media (max-width: 1024px) {
    width: 55vw;
  }

  @media (max-width: 860px) {
    border-radius: 0;
    width: 100vw;
    height: 190px;
    text-align: center;

    img {
      display: none;
      width: 45px;
      height: 45px;
    }
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100%;

  p {
    width: 100%;
    font-size: 20px;
    color: rgba(112, 112, 112, 1);
    margin-bottom: 15px;
  }

  input {
    width: 100%;
    height: 30px;
    background-color: #efefef;
    border: none;
    outline: none;
    border-radius: 5px;
    padding-left: 13px;
    font-size: 15px;
    font-weight: 300;
  }

  input:nth-child(3) {
    margin: 10px 0;
    height: 66px;
  }

  button {
    width: 112px;
    height: 31px;
    font-size: 14px;
    font-weight: 700;
    color: #ffffff;
    border: inherit;
    outline: inherit;
    border-radius: 5px;
    background-color: #1877f2;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    p {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 860px) {
    p {
      padding: 0.3em 0;
      font-size: 1.3em;
    }
  }
`
