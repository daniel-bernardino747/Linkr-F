import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'

import AuthContext from '../../contexts/auth.context'
import { postPublish } from '../../services/api/post.services'
import { Publish, Form } from './style'
//import { postHelpers } from '../../helpers/api/posts.helpers'

export default function PublishPost() {
  //Token do login
  const { user } = useContext(AuthContext)
  const config = {
    headers: {
      Authorization: 'Bearer ' + user,
    },
  }

  // const userData = localStorage.getItem('user')
  // const data = JSON.parse(userData)

  const { register, handleSubmit, formState } = useForm()
  const { isSubmitting, errors } = formState
  const verifyUrl = new RegExp(
    /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i
  )

  function submitForm(data) {
    const arrText = data.text.split(' ')
    const hashtags = arrText
      .map((word) => {
        if (word[0] === '#') {
          return word.replace(/[.,;?!#@$%&*()]/gi, '')
        }
        return false
      })
      .filter((value) => value)
    return new Promise((resolve) =>
      postPublish({ ...data, hashtags }, config)
        .then((sucess) => {
          console.log(sucess.data)
          console.log(data)
          window.location.reload()
          resolve()
        })
        .catch((error) => {
          console.log(error)
        })
    )
  }

  /*   const handlePublish = () => {
    const result = postHelpers.publish(data.id, user)
    return result
  } */

  return (
    <Publish>
      {/* {data.image && <img src={data.image} alt="profileImg" />} */}
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
