import React from 'react'
import * as S from './style'
export default function Comments() {
  return (
    <>
      <S.Comment>
        <img
          src="https://www.wmbstore.com.br/img_sistemas/ecommerce/img_produtos/1/foto_thumb_400_foto_0_3089_emoji-002--fundo-branco.png"
          alt="image comment"
        />
        <S.ContainerTextComment>
          <S.InfoComment>
            <S.UsernameComment>xaropingo</S.UsernameComment>
            <S.InfoUser>• following</S.InfoUser>
          </S.InfoComment>
          <S.TextComment>Não gostei de css</S.TextComment>
        </S.ContainerTextComment>
      </S.Comment>
    </>
  )
}
