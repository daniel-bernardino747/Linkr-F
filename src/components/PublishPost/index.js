import React from 'react'
import { useForm } from 'react-hook-form'
import { postPublish } from '../../services/api/post.services'

import { Publish, Form } from './style'

export default function PublishPost() {
  const data = {
    image:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
  }
  const { register, handleSubmit, formState } = useForm()
  const { isSubmitting, errors } = formState

  function submitForm(data) {
    return new Promise((resolve) =>
      postPublish(data)
        .then((sucess) => {
          window.location.reload()
          console.log(sucess.data)
          resolve()
        })
        .catch((error) => {
          console.log(error)
        })
    )
  }

  return (
    <Publish>
      <img src={data.image} alt="profileImg" />
      <Form onSubmit={handleSubmit(submitForm)}>
        <p>What are you going to share today?</p>
        <input
          type="url"
          placeholder="http://..."
          {...register('url', {
            required: true,
          })}
        />
        {errors?.url?.type === 'required' && <p>Url is required.</p>}
        {errors?.url?.type === 'validate' && <p>Url is invalid.</p>}

        <input
          type="text"
          placeholder="Awesome article about..."
          {...register('text', { required: true, maxLength: 190 })}
        />
        {errors?.text?.type === 'required' && <p>Text is required.</p>}
        {errors?.text?.type === 'maxLength' && (
          <p>Text must have at max 190 characters.</p>
        )}
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Publishing...' : 'Publish'}
        </button>
      </Form>
    </Publish>
  )
}
