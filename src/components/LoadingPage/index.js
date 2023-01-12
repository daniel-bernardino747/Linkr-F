import React, { forwardRef } from 'react'
import { Oval } from 'react-loader-spinner'

import * as S from './style'

export const LoadingPage = forwardRef(function LoadingPage({ loading }, ref) {
  return (
    <S.Loading ref={ref} loading={loading}>
      <Oval
        height={50}
        width={50}
        color="rgba(51,51,51, 1)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loading.state}
        ariaLabel="oval-loading"
        secondaryColor="rgba(109, 109, 109, 1)"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
      <S.LoadingText visible={loading.state}>
        Loading more posts...
      </S.LoadingText>
    </S.Loading>
  )
})
