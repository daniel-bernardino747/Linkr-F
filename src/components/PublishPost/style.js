import styled from 'styled-components'

export const Publish = styled.div`
  width: 611px;
  height: 209px;
  border-radius: 16px;
  background-color: #ffffff;
  display: flex;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 35px;

  img {
    margin-top: 15px;
    margin-left: 10px;
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }

  @media (max-width: 1024px) {
    width: 55vw;
    font-size: 22px;
  }

  @media (max-width: 860px) {
    border-radius: 0;
    width: 100vw;
    height: 190px;

    img {
      width: 45px;
      height: 45px;
    }
  }
`
export const Form = styled.form`
  width: 88%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding-left: 10px;

  p {
    width: 100%;
    font-size: 20px;
    font-weight: 300;
    color: #707070;
    margin-bottom: 15px;
    padding-left: 5px;
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
    width: 85%;

    p {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 860px) {
    width: 90%;
    margin-right: 5px;

    p {
      font-size: 16px;
    }
  }
`
