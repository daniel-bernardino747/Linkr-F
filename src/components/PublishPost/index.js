import React from 'react'

import { Publish, Form } from './style'

export default function PublishPost() {
  const data = {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  }
  const [disable, setDisable] = React.useState(false)
  const [message, setMessage] = React.useState('Publish')
  const [bodyData, setBodyData] = React.useState({ url: '', text: '' })

  function submitForm(e) {
    e.preventDefault()
    setDisable(true)
    setMessage('Publishing...')
    console.log(bodyData)

    /*
    const promise = axios.post('http://localhost:5000/posts', bodyData)
    promise.then(() => {
      setBodyData({ url: '', text: '' })
      setDisable(false)
      window.location.reload()
    })
    promise.catch(() => {
      alert('Houve um erro ao publicar seu link')
      setDisable(false)
    })
    */
  }

  function sendInput(e) {
    setBodyData({ ...bodyData, [e.target.name]: e.target.value })
  }

  return (
    <Publish>
      <img src={data.image} alt="profileImg" />
      <Form onSubmit={submitForm}>
        <p>What are you going to share today?</p>
        <input
          type="url"
          placeholder="http://..."
          name="url"
          onChange={sendInput}
          disabled={disable}
          required
        />
        <input
          type="text"
          placeholder="Awesome article about..."
          name="text"
          onChange={sendInput}
          disabled={disable}
        />
        <button type="onSubmit" disabled={disable}>
          {message}
        </button>
      </Form>
    </Publish>
  )
}
