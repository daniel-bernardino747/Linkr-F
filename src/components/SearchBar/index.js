import React, { useState } from 'react'
import { DebounceInput } from 'react-debounce-input'
import { Link } from 'react-router-dom'

import { useSearchContext } from '../../contexts/search.context'
import * as S from './style'

export default function SearchBar() {
  const [modal, setModal] = useState(false)
  const { searchResults, setSearchResults } = useSearchContext()

  const handleSearch = (e) => {
    e.target.value.length > 0 ? setModal(true) : setModal(false)

    console.log(searchResults)

    const resultsArray = searchResults.original.filter((user) =>
      user.name.includes(e.target.value)
    )

    if (resultsArray.length === 0) {
      console.log(resultsArray.length === 0)
      return setSearchResults({
        ...searchResults,
        search: [{ name: 'Nenhum resultado encontrado.' }],
      })
    } else {
      setSearchResults({ ...searchResults, search: resultsArray })
    }
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
          {searchResults.search.map((i) => (
            <Link key={i.id} to={`/users/${i.id}`}>
              <S.ItemUser key={i.id} notFound={!!searchResults.search[0].image}>
                {i.image && <S.ImageUser src={i.image} alt={i.name} />}
                <S.NameUser>{i.name}</S.NameUser>
              </S.ItemUser>
            </Link>
          ))}
        </S.ModalSearch>
      </S.Container>
    </div>
  )
}
