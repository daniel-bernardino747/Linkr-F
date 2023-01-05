import React from 'react'
import styled from 'styled-components'

import Like from '../../components/Like'
import TextPost from '../../components/TextPost'
import Trending from '../../components/Trending'

export default function Home() {
  const data = {
    id: 1,
    name: 'vitor',
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  }
  const bla = [{ id: 1, name: 'l' }]

  //const data = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <h1>Home</h1>
      <Publish>
        <div>
          <img src={data.image} alt="profileImg" />
        </div>
        <Form>
          <p>What are you going to share today?</p>
          <input type="url" placeholder="http://..." required name="url" />
          <input
            type="text"
            placeholder="Awesome article about..."
            name="comment"
          />
          <button type="onSubmit">Publish</button>
        </Form>
      </Publish>
      <Like />
      <Timeline>
        <Image>
          <img src={data.image} alt={data.image} />
        </Image>
        <div>
          <div>
            <h1>{data.name}</h1>
            <p>
              Muito maneiro esse tutorial de Material UI com React, deem uma
              olhada!
            </p>
          </div>
          <Banner>
            <div>
              <h1>Como aplicar o Material UI em um projeto React</h1>
              <h2>
                Hey! I have moved this tutorial to my personal blog. Same
                content, new location. Sorry about making you click through to
                another page.
              </h2>
              <h3>https://medium.com/@pshrmn/a-simple-react-router</h3>
            </div>
            <img src={data.image} alt={data.image} />
          </Banner>
        </div>
      </Timeline>
      <TextPost>
        Oii, primeira #hashtag asdoasid asdoiasjdn asdoiasdml sadoiasjdm asodias
        dasoidsa #doiasijdsa doasidhj
      </TextPost>
      <Trending hashtagList={bla} />
    </>
  )
}

const Publish = styled.div`
  width: 611px;
  height: 209px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3% 4%;
  margin-bottom: 35px;

  div {
    width: auto;
    height: 100%;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
`
const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding-left: 20px;

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
    margin: 7px 0;
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
`

const Timeline = styled.div`
  display: flex;
  width: 611px;
  height: 276px;
  background-color: #000000;
  border-radius: 20px;

  h1 {
    margin-top: 20px;
    font-size: 19px;
    color: #ffffff;
  }

  p {
    font-size: 17px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`

const Image = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  width: 86px;
  height: 100%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
`

const Banner = styled.div`
  display: flex;
  justify-content: space-between;
  width: 503px;
  height: 155px;
  border: 1px solid #4d4d4d;
  border-radius: 5px;

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
