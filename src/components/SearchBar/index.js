import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'

import { useSearchContext } from '../../contexts/search.context'
import * as S from './style'

export default function SearchBar({ users }) {
  const [modal, setModal] = useState(false)
  const { searchResults, setSearchResults } = useSearchContext()

  const handleSearch = (e) => {
    console.log(e.target.value.length)
    e.target.value.length > 0 ? setModal(true) : setModal(false)

    console.log(searchResults)

    setSearchResults(e.target.value)
  }
  return (
    <div>
      <S.Container>
        <DebounceInput
          minLength={3}
          debounceTimeout={300}
          onChange={handleSearch}
          element={S.Input}
        />
        <S.ModalSearch open={modal}>
          {users.map((i) => (
            <S.ItemUser key={i.id}>{i.name}</S.ItemUser>
          ))}
        </S.ModalSearch>
      </S.Container>
    </div>
  )
}
