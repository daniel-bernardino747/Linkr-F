import { useEffect, useRef, useState } from 'react'

export const useElementOnScreen = ({ posts, setCurrentPage }) => {
  const [loadingState, setLoading] = useState(false)

  const sentinelRef = useRef(null)

  useEffect(() => {
    const postsListsNoLongerHasPost = posts.length % 10 !== 0
    if (postsListsNoLongerHasPost) return

    const callbackFunction = (entries) => {
      const [entry] = entries

      if (entry.isIntersecting) {
        setLoading(entry.isIntersecting)
        setCurrentPage((currentPageInsideState) => currentPageInsideState + 1)
      }
    }

    const intersectionObserver = new IntersectionObserver(callbackFunction)
    if (sentinelRef.current) intersectionObserver.observe(sentinelRef.current)

    return () => {
      if (sentinelRef.current)
        intersectionObserver.unobserve(sentinelRef.current)
    }
  }, [])

  return [
    sentinelRef,
    {
      state: loadingState,
      set: setLoading,
    },
  ]
}
