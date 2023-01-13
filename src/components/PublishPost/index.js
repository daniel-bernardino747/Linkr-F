import React from 'react'
import { useForm } from 'react-hook-form'

import { verifyUrl } from '../../constants/regex.constants'
import { useAuthContext } from '../../contexts/auth.context'
import { postHelpers } from '../../helpers/api/posts.helpers'
import { Publish, Form } from './style'

export default function PublishPost() {
  const { register, handleSubmit, formState } = useForm()
  const { isSubmitting, errors } = formState

  const {
    auth: { states },
  } = useAuthContext()

  function submitForm(data) {
    return new Promise((resolve) => {
      postHelpers.sendPost({ data }).then((success) => {
        if (success) {
          window.location.reload()
          resolve()
        }
      })
    })
  }

  return (
    <Publish>
      {states.user.image && <img src={states.user.image} alt="profileImg" />}
      <Form onSubmit={handleSubmit(submitForm)}>
        <p>What are you going to share today?</p>
        <input
          type="url"
          placeholder="http://..."
          {...register('url', {
            required: true,
            validate: (value) => verifyUrl.test(value),
          })}
        />
        {errors?.url?.type === 'required' && <p>Url is required.</p>}
        {errors?.url?.type === 'validate' && <p>Url is invalid.</p>}

        <input
          type="text"
          max="190"
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
